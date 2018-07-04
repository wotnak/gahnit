import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import * as glue from 'schemaglue'

const { schema: typeDefs, resolver: resolvers } = glue('src/graphql')
console.log(typeDefs)
console.log(JSON.stringify(resolvers))

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: true
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
