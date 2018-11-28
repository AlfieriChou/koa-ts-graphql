import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import { ApolloServer } from 'apollo-server-koa'
import { databaseInitializer } from './initializer/database'

const router: any = new Router()
const app: any = new Koa()

const bootstrap: any = async () => {
  await databaseInitializer()
  app.use(bodyParser())
  const server: any = new ApolloServer({  })
  server.applyMiddleware({ app })

  const port: number = 3000
  const host: string = 'localhost'

  app.listen(port, host, () =>
    console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
  )
}

bootstrap()
