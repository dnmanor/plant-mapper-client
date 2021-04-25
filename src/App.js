import "./App.css";
import { Switch, Route } from "react-router-dom";
import Logo from "./app/components/logo/logo";
import Home from "./app/pages/home/home";
import Landing from "./app/pages/landing/landing";

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/app">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
