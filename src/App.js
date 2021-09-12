import React from 'react';
import {HashRouter, Route,Switch} from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Navigation from './components/Navigation';
import Detail from './router/Detail';
import Whoops from './router/Whoops';
import "./App.css";
 
function App() {
  return (
  <HashRouter>
    <Navigation />
    <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/" component={Whoops}/>
    </Switch>
  </HashRouter>
);
}
export  default App;