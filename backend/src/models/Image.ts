/* importando as decorators */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/* importando a classe orphanage */
import Orphanage from './Orphanage';

/* utilizando as decorators */
@Entity('images')

/* criando a classe de imagens */
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;

}