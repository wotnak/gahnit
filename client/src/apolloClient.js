import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { AUTH_TOKEN } from './constants'

const httpLink = createHttpLink({ uri: `https://${process.env.VUE_APP_GAHNIT_SERVER}` })

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    }
  })
  return forward(operation)
})

// Authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `wss://${process.env.VUE_APP_GAHNIT_SERVER}`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
    }
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

const introspectionQueryResultData = require('./fragmentTypes.json');
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
});

// apollo client setup
const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache({ fragmentMatcher }),
  connectToDevTools: true,
  onError: (e) => { console.log(e) }
})

export default client
