import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ length: 20 })
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
