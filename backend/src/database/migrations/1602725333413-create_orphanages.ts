import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602725333413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         /* 
            Realizar alterções:
            Criar tabela, criar um novo campo, deletar
            algum campo
        */
       /* Criando a tabela no banco de dados */
       await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,/* não pode ser negativa */
            isPrimary: true,/* chave primária */
            isGenerated: true,/* coluna será gerada automaticamente */
            generationStrategy: 'increment',/* aumenta o id automaticamente */
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
           name: 'longitude',
           type: 'decimal',
           scale: 10,
           precision: 2,
         },
         {
           name: 'about',
           type: 'text',
         },
         {
           name: 'instructions',
           type: 'text',
         },
         {
            name: 'opening_hours',
            type: 'varchar',
          },
         {
           name: 'open_on_weekends',
           type: 'boolean',
           default: false,
         }
        ],
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /* Desfazer o que foi feito em up */
        /* Deletar uma tabela */
        await queryRunner.dropTable('orphanages');
    }

}
