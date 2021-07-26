import React from 'react';
import Birrete from "../../assets/images/BIRRETE.png";
import Logo1 from "../../assets/images/logo1.png";
import ReactDOM from 'react-dom';

import './cajaindex.css';


function Cajaindex() {
  return (
    
    <div className="cajaindex">
      <img className="logo1" src={Logo1} />
     <div id="botones" >
  <button className="boton2" type="submit" value="registro1" href="inicio"><img className="Birrete" src={Birrete} />  Registrarse</button>
  <button className="boton1" type="submit" value="usuario" href="inicio"><img className="Birrete" src={Birrete} />  Asistentes </button>
  </div>
     </div>
   
 
 
  );
}


export default Cajaindex;

