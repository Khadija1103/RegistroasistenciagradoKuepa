import React from 'react' /*Import React*/ 
import '../css/Admin.css'/*Import the styles*/
import Birrete from '../../../assets/images/birrete.png' 
import Diploma from '../../../assets/diploma.png'


function Admin () {
    return (
        <div className="Container_Admin"> 

                <div className="Box"> 
                    <img id="img2" src={Birrete} alt="Esta es la img2" />
                    <img id="img3" src={Diploma} alt="Esta es la img" />
                    <h1>
                        ADMINISTRATIVO
                    </h1>

                    <form action="">
                        <p>
                             <input type="text" name="nya" id="nombre_estudiante" value="" placeholder="Nombre del estudiante" />
                       </p>
                       <p>
                           <input type="text" name="nya" id="nombre" value="" placeholder="Nombre" />
                       </p>
                       <p>
                           <input type="text" name="nya" id="apellido" placeholder="Apellido"/>
                       </p>
                       <p>
                           <input type="number" name="nya" id="tel" placeholder="Teléfono"/>
                       </p>
                       <p>
                           <input type="text" name="nya" id="cargo" placeholder="Cargo"/>
                       </p>
                       

                       <p>
                           Ha tenido síntomas de COVID-19 o contacto on alguna persona enferma en las últimas 48 horas:

                       </p>
                       <p>
                           Si <input type="radio" value="certify" id="yes" checked/> 
                           No <input type="radio" value="certify" id="no" checked/> 
                       </p>
                       <p>
                           <input type="submit" value="Enviar" />
                           <input type="reset" value="Borrar" />
                       </p>

                       </form>


                       

                </div>
        </div>

    )
}
export default Admin