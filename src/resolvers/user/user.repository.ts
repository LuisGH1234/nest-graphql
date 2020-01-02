import { Repository, Brackets, EntityRepository } from 'typeorm';
import { User } from '../../database/entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findUsers(limit: number, page: number, filter: string) {
        return this.createQueryBuilder('user')
            .where(
                new Brackets(sqb => {
                    sqb.where(`user.firstName like "%${filter}%"`).orWhere(
                        `user.lastName like "%${filter}%"`,
                    );
                }),
            )
            .skip(limit * (page - 1))
            .take(limit)
            .getManyAndCount();
    }
}
