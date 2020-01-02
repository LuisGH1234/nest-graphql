import { ObjectType, Field, ID, Int, ArgsType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(type => ID)
  readonly id: number;

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
