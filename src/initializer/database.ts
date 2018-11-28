import { createConnection } from 'typeorm'

export const databaseInitializer: any = async () => {
  return await createConnection().then((connection) => {
    console.log('Database connection established')
  })
}
