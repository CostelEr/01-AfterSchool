import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../src/styles/index.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

export const decorators = [
  (Story) => (
    <ApolloProvider client={client}>
      <Story />
    </ApolloProvider>
  ),
];
