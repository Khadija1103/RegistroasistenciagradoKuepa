
import logo from "../../assets/images/logo.png";

import './header.css';


function Header() {
  return (

   <div className="cajaheader">
    <div className="logo">
    <img className="img-fluid" src={logo} />   
    </div>
    </div>
  );
}


export default Header;

