import { Controller, Get } from "@nestjs/common";

import { ExampleService } from "src/examples/example.service";

/**
 * TODO: remove it, it's just an example
 */
@Controller("examples")
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  public async findAll(): Promise<any[]> {
    return this.exampleService.findAll();
  }
}
