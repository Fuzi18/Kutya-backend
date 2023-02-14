import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export default class Kutya {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column()
  kor: number;
}
