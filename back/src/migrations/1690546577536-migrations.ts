import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1690546577536 implements MigrationInterface {
  name = "Migrations1690546577536";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "register_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
