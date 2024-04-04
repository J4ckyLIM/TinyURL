import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExampleModule } from "./examples/example.module";
import { UserModule } from "./users/user.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ExampleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
