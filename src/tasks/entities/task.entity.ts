import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Esto le dice a TypeORM que cree una tabla llamada 'task'
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  isDone: boolean;
}