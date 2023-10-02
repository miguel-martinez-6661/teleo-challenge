import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { UserMediaPage } from "./pages/user-media-page";

const client = new ApolloClient({
  uri: "http://localhost:4000", //Normally this would be an environment variable
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserMediaPage />
    </ApolloProvider>
  );
}

export default App;
