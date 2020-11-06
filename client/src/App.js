import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./containers/Search";
import Saved from "./containers/Saved";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Container maxWidth="md">
          <Header />
          <Switch>
            <Route exact path="/saved" component={Saved} />
            <Route path="/" component={Search} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
