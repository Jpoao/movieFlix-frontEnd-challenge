import NavBar from "components/NavBar";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <h1>MOVIES</h1>
        </Route>
        <Route path="/MOVIES/1" exact>
          <h1>MOVIES ID</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
