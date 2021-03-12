import React from "react";
import './App.css';
import Home from "./Home"
import {Switch,Route} from "react-router-dom";
import Default from "./Default"
import Travel from "./Travel";

function App() {
   return (    
  
    <div className="App">
    <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={Travel}/>
      <Route component={Default}/>
    </Switch>
    </React.Fragment>
    
  </div>
  );
}

export default App;
