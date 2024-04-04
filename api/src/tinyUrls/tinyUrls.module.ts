import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TinyUrlsService } from "./tinyUrls.service";
import { TinyUrl } from "./tinyUrls.entity";
import { TinyUrlsController } from "./tinyUrls.controller";

@Module({
  imports: [TypeOrmModule.forFeature([TinyUrl])],
  providers: [TinyUrlsService],
  controllers: [TinyUrlsController],
})
export class TinyUrlsModule {}
