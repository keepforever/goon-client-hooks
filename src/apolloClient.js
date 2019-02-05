import { ApolloClient, InMemoryCache } from "apollo-client-preset";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";


const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000",
  options: {
    reconnect: true
  }
});

const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const fetchedToken = sessionStorage.getItem("goonToken");

  console.log("App.js token from authLink", '\n', fetchedToken);
  return {
    headers: {
      ...headers,
      authorization: fetchedToken ? `Bearer ${fetchedToken}` : ""
    }
  };
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(createUploadLink({ uri: "http://localhost:4000" }))
);

export default new ApolloClient({
  link,
  cache
});
