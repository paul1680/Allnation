import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import Details from './component/Details/Details';


function App() {
  return (

     <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/Details/:lala">
          <Details/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
