import "./App.css";
import { Switch, Route } from "react-router-dom";
import Logo from "./app/components/logo/logo";
import Home from "./app/pages/home/home";
import Landing from './app/pages/landing/landing'
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Box bgColor="green.50">
      <Logo />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route  path="/app">
          <Home />
        </Route>
      </Switch>
      </Box>
     
    </div>
  );
}

export default App;
