import { Test, TestingModule } from "@nestjs/testing";
import { TinyUrlsService } from "./tinyUrls.service";
import { Repository } from "typeorm";
import { TinyUrl } from "./tinyUrls.entity";

describe("TinyUrlsService", () => {
  let module: TestingModule;
  let tinyUrlsService: TinyUrlsService;
  let tinyUrlRepository: Repository<TinyUrl>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        TinyUrlsService,
        {
          provide: "TinyUrlRepository",
          useClass: Repository,
        },
      ],
    }).compile();

    tinyUrlsService = module.get<TinyUrlsService>(TinyUrlsService);
    tinyUrlRepository = module.get<Repository<TinyUrl>>("TinyUrlRepository");
  });

  afterAll(async () => {
    await module.close();
  });
  describe("getRedirectionUrl", () => {
    it("should throw an error if the tiny URL is not found", async () => {
      const slug = "not-found";
      jest.spyOn(tinyUrlRepository, "findOneBy").mockResolvedValue(null);
      await expect(tinyUrlsService.getRedirectionUrl(slug)).rejects.toThrow(
        `Tiny URL not found with slug: ${slug}`
      );
    });

    it("should increment the counter and return the original URL", async () => {
      const tinyUrl = new TinyUrl({ originalUrl: "https://example.com" });
      jest.spyOn(tinyUrlRepository, "findOneBy").mockResolvedValue(tinyUrl);
      jest.spyOn(tinyUrlsService, "incrementCounter").mockResolvedValue();
      const result = await tinyUrlsService.getRedirectionUrl(tinyUrl.slug);
      expect(result).toBe(tinyUrl.originalUrl);
    });
  });

  describe("createTinyUrl", () => {
    it("should create a new tiny URL", async () => {
      const createArgs = { originalUrl: "https://example.com" };
      const tinyUrl = new TinyUrl(createArgs);
      jest.spyOn(tinyUrlRepository, "save").mockResolvedValue(tinyUrl);
      const result = await tinyUrlsService.createTinyUrl(createArgs);
      expect(result).toBe(tinyUrl);
    });
  });
});
