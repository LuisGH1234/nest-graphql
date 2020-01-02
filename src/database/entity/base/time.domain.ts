import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class TimeDomain {
  @CreateDateColumn()
  createdAt: string | Date;

  @UpdateDateColumn()
  updatedAt: string | Date;
}
