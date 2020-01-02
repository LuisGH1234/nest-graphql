import { ConnectionOptions } from 'typeorm';

export const databaseConfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'music-db',
  synchronize: true,
  logging: false,
  charset: 'utf8mb4',
  entities: ['dist/database/entity/**/*.entity{.ts,.js}'],
};
