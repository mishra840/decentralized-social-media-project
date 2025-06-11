import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wallet_address: string;

  @Column({ length: 280 })
  content: string;

  @CreateDateColumn()
  timestamp: Date;
}