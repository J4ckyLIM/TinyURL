import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTinyUrlEntity1712254070252 implements MigrationInterface {
  name = "CreateTinyUrlEntity1712254070252";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tiny_url" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdatedAt" TIMESTAMP NOT NULL DEFAULT now(), "slug" character varying NOT NULL, "originalUrl" character varying NOT NULL, "counter" integer NOT NULL DEFAULT '0', "expiresAt" date, CONSTRAINT "PK_4bcfe746dc3ce856f454336107f" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tiny_url"`);
  }
}
