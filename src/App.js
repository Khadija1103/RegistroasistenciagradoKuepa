
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import Estadistica from "./pages/estadistica";
import Acompañante from "./pages/acompañante";
import Administrativo from "./pages/administrativo";
import Invitado from "./pages/invitado";
import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";

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


          <Route path="/estadistica">
            <Estadistica/>
          </Route>

          <Route path="/acompañante">
            <Acompañante/>
          </Route>

          <Route path="/administrativo">
            <Administrativo/>
          </Route>

          <Route path="/invitado">
            <Invitado/>
          </Route>

          </Switch>
        </Router>
    </div>

  );
}

export default App;
