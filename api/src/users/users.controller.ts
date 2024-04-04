import { Controller, Get } from "@nestjs/common";

import { UserService } from "./users.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll(): Promise<any[]> {
    return this.userService.findAll();
  }
}
