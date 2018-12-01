import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { ApolloServer, gql } from 'apollo-server-koa'
import { databaseInitializer } from './initializer/database'
import { config } from './config'

const app: any = new Koa()

const typeDefs: string = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

const resolvers: Object = {
  Query: {
    hello: () => 'world',
  },
}

const bootstrap: any = async () => {
  await databaseInitializer()
  app.use(bodyParser())
  const server: any = new ApolloServer({
    typeDefs,
    resolvers
  })
  server.applyMiddleware({ app })
  const host: string = 'localhost'
  app.listen(config['port'], host, () =>
    console.log(`🚀 Server ready at http://${host}:${config['port']}${server.graphqlPath}`)
  )
}

bootstrap()
