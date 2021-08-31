import NavBar from "components/NavBar";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "util/auth";

const Routes = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated() ? <Redirect to="/movies"/> : <Home />}
        </Route>
        <Route path="/movies" exact>
          <h1>MOVIES</h1>
        </Route>
        <Route path="/moives/:movieId">
          <h1>MOVIES ID</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
