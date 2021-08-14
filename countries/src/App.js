import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";
import Home from "./Components/Home";

const  App = () => {


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
