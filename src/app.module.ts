import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './resolvers/user/user.module';
import { databaseConfig } from './database/config';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(databaseConfig),
  ],
})
export class AppModule {}
