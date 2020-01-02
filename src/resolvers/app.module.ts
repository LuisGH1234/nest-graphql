import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { databaseConfig } from '../database/config';
import { RoleModule } from './role/role.module';

@Module({
    imports: [
        UserModule,
        RoleModule,
        GraphQLModule.forRoot({
            // debug: false,
            // playground: false,
            autoSchemaFile: 'schema.gql',
        }),
        TypeOrmModule.forRoot(databaseConfig),
    ],
})
export default class AppModule {}
