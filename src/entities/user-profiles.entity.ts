import {
  Column,
  CreateDateColumn,
  Entity,
  ForeignKey,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'user_profiles' })
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  department: string;

  @Column({ type: 'date', nullable: true })
  joinDate: Date;

  @Column({
    type: 'enum',
    enum: ['permanent', 'contract', 'intern'],
    default: 'permanent',
  })
  employmentStatus: 'permanent' | 'contract' | 'intern';

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
