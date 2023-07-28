import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1690558385158 implements MigrationInterface {
    name = 'Migrations1690558385158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "usersId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "userId" TO "usersId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
