import "./App.css";
import { Switch, Route } from "react-router-dom";
import Logo from "./app/components/logo/logo";
import Home from "./app/pages/home/home";

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route path="/app">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
