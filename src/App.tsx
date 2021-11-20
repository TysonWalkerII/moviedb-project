import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeRoute />
          </Route>
          <Route path="/movie/:id" exact>
            <MovieDetails />
          </Route>
          <Route path="/watchlist" exact>
            <Watchlist />
          </Route>
          <Route path="" exact></Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
