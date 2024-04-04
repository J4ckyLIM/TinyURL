import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { BaseService } from "../base/base.service";
import { Example } from "./example.entity";

@Injectable()
export class ExampleService extends BaseService<Example> {
  constructor(
    @InjectRepository(Example)
    exampleRepository: Repository<Example>
  ) {
    super(exampleRepository);
  }
}
