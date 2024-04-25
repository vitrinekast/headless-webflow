// lib/client.js
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://rqiv8tsw.api.sanity.io/v2023-08-01/graphql/production/default",
    }),
  });
});