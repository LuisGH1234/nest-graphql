import { Resolver, Args, Query } from '@nestjs/graphql';
import { RoleType, UserType } from '../../schema';
import { RoleService } from './role.service';

@Resolver(of => RoleType)
export class RoleResolver {
    constructor(private readonly roleService: RoleService) {}

    @Query(returns => [UserType], { nullable: true })
    roles(@Args({ name: 'filter', nullable: true, type: () => String }) filter?: string) {
        return this.roleService.getRoles(filter);
    }
}
