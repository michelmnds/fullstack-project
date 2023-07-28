import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1690558337644 implements MigrationInterface {
    name = 'Migrations1690558337644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "register_date" TIMESTAMP NOT NULL DEFAULT now(), "usersId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
