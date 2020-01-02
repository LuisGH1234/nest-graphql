import { Field, ID, ObjectType } from 'type-graphql';

// @ObjectType()
export class BaseTypedef {
    @Field(type => ID)
    readonly id: number;

    @Field(type => String)
    readonly createdAt: string | Date;

    @Field(type => String)
    readonly updatedAt: string | Date;
}
