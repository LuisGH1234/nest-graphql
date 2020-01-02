import { Resolver, Query, ResolveProperty, Parent, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType, UserArgs, UserPaginationResult } from '../../schema/user';
import { UseGuards } from '@nestjs/common';

@Resolver(of => UserType)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => String)
    user(): string {
        return this.userService.getHello();
    }

    // @UseGuards()
    @Query(returns => UserPaginationResult, { nullable: true })
    users(@Args() userArgs: UserArgs) {
        return this.userService.getUsers(userArgs);
    }

    example(des: string, ref: number) {
        return null;
    }
}
