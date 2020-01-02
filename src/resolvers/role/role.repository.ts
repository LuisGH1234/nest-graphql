import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../../database/entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
    findRoles(filter: string) {
        return this.createQueryBuilder('role')
            .where(`role.description like "%${filter}"`)
            .getMany();
    }

    findRoleByUser(userID: number) {
        return this.createQueryBuilder('role')
            .leftJoin('role.users', 'user')
            .where('user.id = :userID', { userID })
            .getOne();
    }
}
