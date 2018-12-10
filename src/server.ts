import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as graphqlKoa from 'koa-graphql'
import * as Router from 'koa-router'
import { databaseInitializer } from './initializer/database'
import { config } from './config'
import { schema } from './app'

const app: any = new Koa()
const router: any = new Router()

const bootstrap: Function = async () => {
  await databaseInitializer()
  app.use(bodyParser())
  router.get('/graphql', graphqlKoa({ schema }))
  app.use(router.routes())
  app.use(router.allowedMethods())
  const host: string = 'localhost'
  app.listen(config['port'], host, () =>
    console.log(`🚀 Server ready at http://${host}:${config['port']}/graphql`)
  )
}

bootstrap()
