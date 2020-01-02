import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserArgs, UserPaginationResult } from '../../schema/user';

@Injectable()
export class UserService {
    constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}

    getHello() {
        return 'Hellow user';
    }

    async getUsers({ page = 1, limit = 10, filter = '' }: UserArgs) {
        const result = await this.userRepository.findUsers(limit, page, filter);
        return new UserPaginationResult(result);
    }
}
