import { ObjectType, Field, Int, ArgsType } from 'type-graphql';
import { BaseTypedef } from './base/base.typedef';
import { RoleType } from '.';

@ObjectType()
export class UserType extends BaseTypedef {
    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field(type => Int)
    readonly age: number;

    @Field({ nullable: true })
    readonly nickname?: string;

    @Field()
    readonly email: string;

    @Field(typev => RoleType, { nullable: true })
    readonly role?: RoleType;
}

@ArgsType()
export class UserArgs {
    @Field(type => Int, { nullable: true })
    readonly page?: number;

    @Field(type => Int, { nullable: true })
    readonly limit?: number;

    @Field({ nullable: true })
    readonly filter?: string;
}

@ObjectType()
export class UserPaginationResult {
    constructor(selectResult: [UserType[], number]) {
        this.users = selectResult[0];
        this.count = selectResult[1];
    }

    @Field(type => UserType)
    readonly users: UserType[];

    @Field(type => Int)
    readonly count: number;
}
