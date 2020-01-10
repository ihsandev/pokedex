import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import routes from "./config/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        {routes &&
          routes.map((route, i) => {
            return (
              <Route key={i} exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
      </Switch>
    </Router>
  );
};

export default App;
