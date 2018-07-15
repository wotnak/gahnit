import { GraphQLServer } from 'graphql-yoga'
import * as glue from 'schemaglue'
import * as sql from 'mssql'
import * as mongoose from 'mongoose'

const { schema: typeDefs, resolver: resolvers } = glue('src/graphql', { mode: 'ts' })

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req
  })
})

// connect to mongodb
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_NAME}`, { useNewUrlParser: true, auth:{authdb:"admin"} })

// connect to subiekt database
sql.connect(`mssql://${process.env.SUBIEKT_DB_USER}:${process.env.SUBIEKT_DB_PASSWORD}@${process.env.SUBIEKT_DB_SERVER}/${process.env.SUBIEKT_DB_NAME}`)

server.start(() => console.log('Server is running on http://localhost:4000'))
