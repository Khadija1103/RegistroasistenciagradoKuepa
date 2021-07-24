
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, Navlink, Redirect} from "react-router-dom";

function App() {
  return (

         <div id="container-fluid overflow-hidden">
    <Router>
        
         <Switch>
           <Route exact path="/" render={() => (<Redirect to="/home"/>)}>
          </Route>

           <Route path="/home">
            <Index/>
          </Route>


          <Route path="/inicio">
            <Inicio/>
          </Route>
          </Switch>
        </Router>
    </div>

  );
}

export default App;
