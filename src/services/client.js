// lib/client.js
import { HttpLink, InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '-sVjbFWUfDVnY3Yc9qjQFrNxVcdD86QTkBJ5c5pmcOg';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(new HttpLink({
      uri: "https://graphql.contentful.com/content/v1/spaces/a1l8siu507wn",
    })),
  });
});