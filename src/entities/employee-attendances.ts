import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "./users.entity";


@Entity({ name: 'employee_attendances' })
export class EmployeeAttendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.attendances, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User

  @Column({
    type: 'enum',
    enum: ['clock_in', 'clock_out'],
    default: null,
  })
  attendanceTypes: 'clock_in' | 'clock_out';

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  datetime: Date;

  @Column({ nullable: true })
  isVerified: boolean;

  @Column({ type: 'text' })
  photo: string;

  @CreateDateColumn()
  createdAt: Date;
}
