import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import List from './Component/List/List';
import Register from './Component/Register/Register';



import './App.css';

function App() {
  return (
    <Router>
      <div> 
        <nav>
          <header className="container">
         

          </header>
        </nav>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/users/register">
            <Register />
          </Route>
          
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/myList">
            <List />
          </Route>

          <Route path="/blogs">
            <Blog />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
