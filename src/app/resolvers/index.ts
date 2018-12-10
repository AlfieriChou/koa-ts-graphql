import * as dir from 'dir_filenames'
import * as _ from 'lodash'

const queries: string[] = dir(`${process.env.PWD}/src/app/resolvers/query`)
const mutations: string[] = dir(`${process.env.PWD}/src/app/resolvers/mutation`)
let Query: Object = {}
let Mutation: Object = {}
if (queries.length > 0) {
  queries.map(query => {
    _.merge(Query, require(query))
  })
}
if (mutations.length > 0) {
  mutations.map(mutation => {
    _.merge(Mutation, require(mutation))
  })
}

export let resolvers: Object = {}
if (Object.keys(Query).length > 0) {
  resolvers = { Query: Query }
}
if (Object.keys(Mutation).length > 0) {
  resolvers = { Mutation: Mutation }
}
