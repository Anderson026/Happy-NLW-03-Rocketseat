import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602754875952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      /* criando a tabela de imagens */ 
      await queryRunner.createTable(new Table({
          name: 'images',
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
                name: 'path',
                type: 'varchar',
             },
             {
                name: 'orphanage_id',
                type: 'integer',
             }
          ],
          foreignKeys: [
             {
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],
                referencedTableName: 'orphanages',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
             }
          ]
       }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       /* deletando a tabela de imagens */
       await queryRunner.dropTable('images');
    }

}
