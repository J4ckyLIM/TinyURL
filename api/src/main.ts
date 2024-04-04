import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>("PORT");

  await app.listen(port, () => {
    console.log("[SERVER]", config.get<string>("BASE_URL"));
  });
}
bootstrap();
