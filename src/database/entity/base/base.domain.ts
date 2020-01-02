import { TimeDomain } from './time.domain';
import { PrimaryGeneratedColumn } from 'typeorm';

export class BaseDomain extends TimeDomain {
  @PrimaryGeneratedColumn()
  id: number;
}
