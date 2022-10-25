import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return null;
  }

  @Post()
  scenario1(@Body() numbersInfo: number[]): void {
    const numbers = [parseInt(numbersInfo["a"]), parseInt(numbersInfo["b"])];
    this.appService.scenario1(numbers);
  }
}
