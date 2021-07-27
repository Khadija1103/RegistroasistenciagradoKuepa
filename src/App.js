
import Index from "./pages/index";
import Inicio from "./pages/inicio";
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, Navlink, Redirect} from "react-router-dom";
import Footer from "./components/footer/footer";
/*import Form from "./pages/Form"*/

function App() {
  return (

         <div className="App">
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
      <Footer/>
      </Router>

    </div>

  );
}
export default App