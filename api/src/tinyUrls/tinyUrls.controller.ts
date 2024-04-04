import {
  Body,
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Res,
} from "@nestjs/common";
import { TinyUrlsService } from "./tinyUrls.service";
import { TinyUrl, TinyUrlCreateArgs } from "./tinyUrls.entity";
import { Response } from "express";

@Controller()
export class TinyUrlsController {
  constructor(private readonly tinyUrlsService: TinyUrlsService) {}

  @Get("/:slug")
  @HttpCode(301)
  public async redirectToUrl(
    @Param("slug") slug: string,
    @Res() response: Response
  ) {
    try {
      const redirectUrl = await this.tinyUrlsService.getRedirectionUrl(slug);
      return response.redirect(redirectUrl);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  public async createTinyUrl(
    @Body() createArgs: TinyUrlCreateArgs
  ): Promise<TinyUrl> {
    try {
      return this.tinyUrlsService.createTinyUrl(createArgs);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
