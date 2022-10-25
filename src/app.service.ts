import { Injectable } from "@nestjs/common";
const spawn = require("child_process").spawn;
import { PythonShell } from "python-shell";

@Injectable()
export class AppService {
  spawn_scenario1(numbers: number[]): void {
    const process: any = spawn("python", ["./src/python/scenario-1.py", numbers]);

    process.stdout.on("data", (data) => {
      console.log("Data to nodejs", data.toString());
    });

    process.stderr.on("data", (data) => {
      console.log("stder", data.toString());
    });

    process.on("close", (code) => {
      console.log(`Child process exited with code ${code}`);
    });
  }

  shell_scenario1(numbers: string[]): void {
    const options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: "./src/python",
      args: [numbers],
    };

    // @ts-ignore
    PythonShell.run("scenario-1.py", options, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("result: ", result.toString());
    });
  }
}
