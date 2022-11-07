import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { baseUrl } from "./constants/graphql";

const apolloClient = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
