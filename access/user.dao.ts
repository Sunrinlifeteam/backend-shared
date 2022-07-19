import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, length: 10 })
  username: string;

  @Column({ nullable: false })
  department: string;

  @Column({ type: 'int', nullable: false, unsigned: false })
  grade: number;

  @Column({ type: 'int', nullable: false, unsigned: false })
  class: number;

  @Column({ type: 'int', nullable: false, unsigned: true })
  number: number;

  @Column({ type: 'int', default: 0, nullable: false })
  accountType: number;

  @Column({ type: 'bigint', default: 0, nullable: false })
  role: number;

  @Column({ length: 200, nullable: true, select: false })
  refreshToken: string;

  @Column({ length: 150, nullable: true })
  description?: string;

  @Column({ length: 200, nullable: true })
  githubLink?: string;

  @Column({ type: 'mediumtext', nullable: true })
  image?: string;

  @Column({ type: 'mediumtext', nullable: true })
  backgroundImage?: string;

  //   @ManyToOne(() => ClubInfoEntity, (clubInfo) => clubInfo.users)
  //   @JoinColumn()
  //   clubInfo: ClubInfoEntity;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
