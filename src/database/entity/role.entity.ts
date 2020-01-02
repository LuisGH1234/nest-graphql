import { Entity, Column, OneToMany } from 'typeorm';
import { BaseDomain } from './base/base.domain';
import { User } from '.';

@Entity()
export class Role extends BaseDomain {
    @Column({ length: 100 })
    description: string;

    @OneToMany(
        type => User,
        user => user.role,
    )
    users: User[];
}
