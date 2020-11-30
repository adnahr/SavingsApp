import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './home.css'
import logo from "../Images/Logos/logo.png"


export default class Home extends Component {
    render(){
        return(
        <div id="hp">
          <div id="homePageBegin">
            <nav>
                <header className="container">
                    <div className="h">        
                        <Navbar expand="lg" className="nvb nav1" variant="dark" sticky="top">
                            <img src={logo} height="30px" />
                            <Navbar.Brand className="navlink pc" href="/">Savings</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav" className="nvbcollapse">
                                <Nav className="navnav ml-auto">
                                    <Nav.Link as={Link} className="navlink" to="/">Home</Nav.Link>
                                    <Nav.Link className="navlink" href="#advices">Advices</Nav.Link>
                                    <Nav.Link className="navlink" to="/blogs" as={Link}>Blogs</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse>
                                {localStorage.getItem("token") == null ? 
                                    <Nav.Link as={Link} className="navlink" to="/users/register">Registration</Nav.Link>
                                    : <Nav.Link className="navlink" onClick={() => {localStorage.clear(); window.location.reload();}}>Log out</Nav.Link>}
                                    <Nav.Link className="navlink" to="/contact" as={Link}>Contact</Nav.Link>
                                    <Nav.Link className="navlink" to="/myList" as={Link}>YourList</Nav.Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>  
                    <div id="h2">
                    <Navbar expand="lg" className="nvb" variant="dark" sticky="top">
                            <img src={logo} height="30px" />
                            <Navbar.Brand className="navlink pc text" href="/">Savings</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav" className="nvbcollapse">
                                <Nav className="navnav ml-auto">
                                    <Nav.Link as={Link} className="navlink text" to="/">Home</Nav.Link>
                                    <Nav.Link className="navlink text" href="#advices">Advices</Nav.Link>
                                    <Nav.Link className="navlink text" to="/blogs" as={Link}>Blogs</Nav.Link>
                                </Nav>
                                {localStorage.getItem("token") == null ? 
                                    <Nav.Link as={Link} className="navlink text" to="/users/register">Registration</Nav.Link>
                                    : <Nav.Link className="navlink text" onClick={() => {localStorage.clear(); window.location.reload();}}>Log out</Nav.Link>}
                                    <Nav.Link className="navlink text" to="/contact" as={Link}>Contact</Nav.Link>
                                    <Nav.Link className="navlink text" to="/myList" as={Link}>YourList</Nav.Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </header>
            </nav>
        </div>
        <div id="advices">
            <div id="leftofAdv"> 
                <h1>Are you good at savings or you want to become that? You are at the right place,
                     just note everything yor earn or spend right here: </h1> <br/>
                <Nav.Link className="navlink" to="/myList" as={Link} id="gotolist">Go to your list</Nav.Link>
            </div>
            <div id="rigthofAdv">
                <ul>
                    <li>Make your month plan</li>
                    <li>Get a piggy bank</li>
                    <li>Order seasonal groceries</li>
                    <li>Pay with cash</li>
                    <li>Avoid shopping</li>
                </ul>
            </div>
        </div>
        <div id="background2"></div>
        <div id="blogs">
            <p>Actual theme</p>
            <h1>How to save your money in 10 easy steps</h1>
            <p>In the week of savings, when this topic is actively discussed, we wanted to share with you 7 concrete, easily applicable and efficient ways to save the desired money for any purpose. Whether you want to secure your future or simply achieve a goal you have set, frugal habits will make your journey much easier. These are our tips…</p>
            <Nav.Link className="navlink" to="/blogs" as={Link} id="gotolist">See more blogs</Nav.Link>
        </div>
        
        <div id="quote">
            <p id="quote-text">Making money is a hobby that will complement any other hobbies you have, beautifully. </p>
            <p>-Scott Alexender</p>
        </div>
    </div>
    
    )
    }
}