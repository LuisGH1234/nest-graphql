import { ObjectType, Field, ArgsType } from 'type-graphql';
import { BaseTypedef } from './base/base.typedef';
import { UserType } from '.';

@ObjectType()
export class RoleType extends BaseTypedef {
    @Field()
    readonly description: string;

    @Field(type => [UserType], { nullable: true })
    readonly users?: UserType[];
}
