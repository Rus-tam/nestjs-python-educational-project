import { Injectable } from "@nestjs/common";
const spawn = require("child_process").spawn;

@Injectable()
export class AppService {
  scenario1(numbers: number[]): void {
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
}
