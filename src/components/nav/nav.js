


import './nav.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, NavLink, Redirect} from "react-router-dom";

function Nav() {
  return (
  
    
    <nav className="menu">
    <ul>
  
        <li><NavLink to="/home" activeClassName="active" ><i className="fa fa-home"/></NavLink></li>
        
  
     
     
  </ul>
  
  </nav>
    );
  }
  
 

export default Nav;

