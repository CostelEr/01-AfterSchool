import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Text1 } from "../demo/Text1";
import { Text2 } from "../demo/Text2";
import { Text3 } from "../demo/Text3";
import { Countries } from "../demo/countries/Countries";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Countries} />
            <Route exact path="/text1" component={Text1} />
            <Route exact path="/text2" component={Text2} />
            <Route exact path="/text3/:id?/:page?" component={Text3} />
            <Route exact path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
