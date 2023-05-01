import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1682947811800 implements MigrationInterface {
    name = 'InitialMigration1682947811800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "codigo" character varying(10) NOT NULL, "nome" character varying(50), "token" character varying(255), "telefoneum" character varying(20), "telefonedois" character varying(20), "telefonetres" character varying(20), "telefonequatro" character varying(20), "telefonecinco" character varying(20), CONSTRAINT "UQ_38777c5bca00ee20f9b57bc4b38" UNIQUE ("codigo"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entregas" ("id" SERIAL NOT NULL, "tokencoleta" character varying(255), "entrega" character varying(255), "obs" character varying(500), "telefone" character varying(20), "formadepagamento" character varying(15), "data" character varying(15), CONSTRAINT "PK_b0bdf868c69c227aefd59085282" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "etapas" ("id" SERIAL NOT NULL, "telefone" character varying(20) NOT NULL, "etapa" character varying(5) NOT NULL, "etapadois" character varying(5), "codigo" character varying(10), CONSTRAINT "UQ_dd36673c5a83758f3d075edc774" UNIQUE ("telefone"), CONSTRAINT "PK_26de329bbb63ed9c4e4023b6c2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "etapas"`);
        await queryRunner.query(`DROP TABLE "entregas"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
