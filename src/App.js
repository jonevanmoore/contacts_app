import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import Contacts from "./components/pages/ContactsPage";
import NoPageFound from './components/pages/NoPageFound'

class App extends Component {


  render() {


    return (
      <Router>
        <Switch>
          <Route path={"/"} exact /*strict*/ component={Contacts} />
          <Route exact /*strict*/ component={NoPageFound} />
        </Switch>
      </Router>
    );
  }
}



export default App;
