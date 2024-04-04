import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./users.entity";
import { BaseService } from "../base/base.service";

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    super(userRepository);
  }
}
