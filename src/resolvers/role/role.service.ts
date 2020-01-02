import { Injectable, Inject } from '@nestjs/common';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
    constructor(@Inject(RoleRepository) private readonly roleRepository: RoleRepository) {}

    async getRoles(filter = '') {
        return this.roleRepository.findRoles(filter);
    }
}
