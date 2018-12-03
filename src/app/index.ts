import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { GraphQLSchema } from 'graphql'


export const schema: GraphQLSchema = makeExecutableSchema({
  resolvers,
  typeDefs
})