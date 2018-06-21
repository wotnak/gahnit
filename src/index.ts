import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'
import resolvers from './resolvers'
import typeDefs from './types'



const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT,    // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET,        // taken from database/prisma.yml (value is set in .env)
      debug: true,                              // log all GraphQL queries & mutations
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
