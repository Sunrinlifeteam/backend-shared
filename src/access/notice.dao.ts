import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class NoticeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: 'school' | 'intranet';

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'simple-array' })
  attachments: string[];
}
