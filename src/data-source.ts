import 'reflect-metadata';
import 'dotenv/config';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, './entities/**.{js,ts}');
  const migrationsPath = path.join(__dirname, './migrations/**.{js,ts}');

  return {
    type: 'postgres',
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(setDataSourceConfig());

export default AppDataSource;
