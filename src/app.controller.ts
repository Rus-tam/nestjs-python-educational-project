import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return null;
  }

  @Post("/spawn-scenario-1")
  spawn_scenario1(@Body() numbersInfo: number[]): void {
    const numbers = [parseInt(numbersInfo["a"]), parseInt(numbersInfo["b"])];
    this.appService.spawn_scenario1(numbers);
  }

  @Post("/shell-scenario-1")
  shell_scenario1(@Body() numbersInfo: string[]): void {
    const numbers = [numbersInfo["a"], numbersInfo["b"]];

    this.appService.shell_scenario1(numbers);
  }
}
