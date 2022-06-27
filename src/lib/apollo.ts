import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4shj3jq249y01z36yf56xp0/master',
  cache: new InMemoryCache()
})