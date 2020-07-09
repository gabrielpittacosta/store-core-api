import { MigrationInterface, QueryRunner } from 'typeorm'

export class User1594324817237 implements MigrationInterface {
  name = 'User1594324817237'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "cashier_id" character varying(244) NOT NULL, "category_id" character varying(244) NOT NULL, "quantity_per_unit" integer NOT NULL, "unit_price" double precision NOT NULL, "units_on_order" integer NOT NULL, "discontinued" boolean NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "last_name" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "address_id" integer, "role_id" character varying(244), "login" character varying(30) NOT NULL, "password" character varying(30) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "user_role" ("userId" uuid NOT NULL, "roleId" integer NOT NULL, "userIdId" uuid, CONSTRAINT "REL_04725d6b1541cabe01494700fe" UNIQUE ("userIdId"), CONSTRAINT "PK_7b4e17a669299579dfa55a3fc35" PRIMARY KEY ("userId", "roleId"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "user_role" ADD CONSTRAINT "FK_04725d6b1541cabe01494700fef" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_role" DROP CONSTRAINT "FK_04725d6b1541cabe01494700fef"`,
    )
    await queryRunner.query(`DROP TABLE "role"`)
    await queryRunner.query(`DROP TABLE "user_role"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TABLE "product"`)
  }
}
