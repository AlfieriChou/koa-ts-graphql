import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { ApolloServer, gql } from 'apollo-server-koa'
import { databaseInitializer } from './initializer/database'

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

  const port: number = 4000
  const host: string = 'localhost'

  app.listen(port, host, () =>
    console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
  )
}

bootstrap()
