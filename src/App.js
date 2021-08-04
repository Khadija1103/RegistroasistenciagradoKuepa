
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import Estadistica from "./pages/estadistica";
import Acompañante from "./pages/acompañante";
import Administrativo from "./pages/administrativo";
import Invitado from "./pages/invitado";
import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import Admin from "./components/forms/Admin/Admin";
import GlobalStyle from './GlobalStyles.js'

function App() {
  return (

         <div className="App">
    <Router>
    <GlobalStyle/> 
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
      {/* {/*<Footer/> */}
     


          <Route path="/estadistica">
            <Estadistica/>
          </Route>

          <Route path="/Acompañante">
            <Acompañante/>
          </Route>

          <Route path="/Administrativo">
            <Admin/>
          </Route>

          <Route path="/Invitado">
            <Invitado/>
          </Route>

          </Router>

          
    </div>

  );
}
export default App