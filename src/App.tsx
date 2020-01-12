import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from "./config/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        {routes &&
          routes.map((route: any, i: number) => {
            return <Route key={i} {...route} />;
          })}
      </Switch>
    </Router>
  );
};

export default App;
