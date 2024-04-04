import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExampleController } from "./examples.controller";
import { Example } from "../domain";
import { ExampleService } from "./example.service";

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
