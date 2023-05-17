import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684348925188 implements MigrationInterface {
    name = 'Default1684348925188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo" DROP DEFAULT`);
    }

}
