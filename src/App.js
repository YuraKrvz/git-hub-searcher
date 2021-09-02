import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages';
import Person from './Pages/Person';
import NotFound from './components/NotFound';

export default class App extends React.Component {

 render(){
   return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/person/:id" exact component={Person}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
   );
 }
};
