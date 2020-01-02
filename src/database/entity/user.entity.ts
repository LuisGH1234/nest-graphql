import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseDomain } from './base/base.domain';
import { Role } from '.';

@Entity()
export class User extends BaseDomain {
    @Column('varchar', { length: 150 })
    firstName: string;

    @Column('varchar', { length: 150 })
    lastName: string;

    @Column()
    age: number;

    @Column('varchar', { length: 50, default: 'default' })
    nickname?: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToOne(
        type => Role,
        role => role.users,
    )
    role: Role;

    @BeforeInsert()
    beforeInsert() {
        if (this.password && this.password.length > 0) {
            this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
        }
    }

    compare(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }

    getToToken(): Partial<User> {
        return {
            id: this.id,
            email: this.email,
        };
    }
}
