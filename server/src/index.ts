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
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, auth:{authdb:"admin"} })
				.catch(err => console.log(err))
				.then(console.log("Successfully connected to mongodb server."))		

/*
// connect to subiekt database
sql.connect(process.env.SUBIEKT_INTEGRATION_DB_CONNECTION_URL)
				.catch(err => console.log(err))
				.then(console.log("Successfully connected to subiektgt server."))
*/

server.start(() => console.log('Server is running on http://localhost:4000'))
