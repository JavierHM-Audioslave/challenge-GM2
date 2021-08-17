import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";
import MainDashboard from "./Components/MainDashboard";
import OneCountryDashboard from "./Components/OneCountryDashboard";

const  App = () => {


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainDashboard} />
        <Route exact path="/country/:countryName" component={OneCountryDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
