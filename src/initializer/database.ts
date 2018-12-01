import { config } from '../config'
import { createConnection, ConnectionOptions } from 'typeorm'

const mysql: Object = config['mysql']

export const databaseInitializer: any = async () => {
  const connection: ConnectionOptions = {
    type: 'mysql',
    host: mysql['host'] || 'localhost',
    port: parseInt(mysql['port'] || '3306', 10),
    username:mysql['username'] || 'user',
    password: mysql['password'] || null,
    database: mysql['database'] || 'test',
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
  return await createConnection(connection).then((connection) => {
    console.log('Database connection established')
  })
}
