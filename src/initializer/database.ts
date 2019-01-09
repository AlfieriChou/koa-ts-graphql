import { config } from '../config'
import { createConnection } from 'typeorm'
import { Mysql } from '../typing/config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const mysql: Mysql = config.mysql

export const databaseInitializer: any = async () => {
  const connection: MysqlConnectionOptions = {
    type: 'mysql',
    host: mysql.host || 'localhost',
    port: mysql.port || 3306,
    username:mysql.username || 'user',
    password: mysql.password || null,
    database: mysql.database || 'test',
    synchronize: true,
    logging: true,
    entities: [
      `${process.env.PWD}/src/entity/*.ts`
    ],
    migrations: [
      `${process.env.PWD}/src/migration/*.ts`
    ],
    subscribers: [
      `${process.env.PWD}/src/subscriber/*.ts`
    ],
    cli: {
      entitiesDir: `${process.env.PWD}/src/entity`,
      migrationsDir: `${process.env.PWD}/src/migration`,
      subscribersDir: `${process.env.PWD}/src/subscriber`
    }
  }
  return await createConnection(connection)
    .then(() => {
      console.log('Database connection established')
    })
    .catch(err => {
      throw err
    })
}
