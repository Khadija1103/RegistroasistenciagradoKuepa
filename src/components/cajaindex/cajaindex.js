import React from 'react';
import Birrete from "../../assets/images/BIRRETE.png";
import Logo1 from "../../assets/images/logo1.png";

import ReactDOM from 'react-dom';


import './cajaindex.css';


function Cajaindex() {
  return (

    <div className="cajaindex">
    
    <div className="marco">
    <img className="logo1" src={Logo1} />
   


  <div id="botones" >

  <button className="boton2" type="submit" value="inicio" ><img className="Birrete" src={Birrete} /> <br></br>  Registrarse</button>
 

 
  <button className="boton1" type="submit" value="estadistica" ><img className="Birrete" src={Birrete} />       
  <br></br>Asistentes </button>
   
  </div>

     </div>
   
   </div>
 
 
  );
}


export default Cajaindex;

