import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "../base/base.service";
import { TinyUrl, TinyUrlCreateArgs } from "./tinyUrls.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TinyUrlsService extends BaseService<TinyUrl> {
  constructor(
    @InjectRepository(TinyUrl)
    private tinyUrlRepository: Repository<TinyUrl>
  ) {
    super(tinyUrlRepository);
  }

  public async getRedirectionUrl(slug: string): Promise<string> {
    const tinyUrl = await this.tinyUrlRepository.findOneBy({ slug });
    if (!tinyUrl) {
      throw new Error(`Tiny URL not found with slug: ${slug}`);
    }
    await this.incrementCounter(tinyUrl);
    return tinyUrl.originalUrl;
  }

  public async createTinyUrl(createArgs: TinyUrlCreateArgs): Promise<TinyUrl> {
    const tinyUrl = new TinyUrl(createArgs);
    return this.tinyUrlRepository.save(tinyUrl);
  }

  public async incrementCounter(tinyUrl: TinyUrl): Promise<void> {
    await this.tinyUrlRepository.update(tinyUrl.id, {
      counter: tinyUrl.counter + 1,
    });
  }
}
