import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([RoleRepository])],
    providers: [RoleService, RoleResolver],
})
export class RoleModule {}
