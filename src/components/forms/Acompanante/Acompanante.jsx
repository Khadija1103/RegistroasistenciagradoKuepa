import React from 'react' /*Import React*/ 
import '../css/Acompanante.css'/*Import the styles*/



function Acompanante () {
    return (
        <div className="Container_Invitado"> 

                <div className="Box"> 
                    
                    <h1>
                        ACOMPAÑANTE
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
                       <select>
                            <option value="pareja">Pareja</option>
                            <option value="hijo">Hij@</option>
                            <option value="padre">Padre</option>
                            <option value="madre">Madre</option>
                            <option value="hermano">Herman@</option>
                            <option value="otro">Otro</option>
                        </select>

                       <p>
                           Ha tenido síntomas de COVID-19 o contacto on alguna persona enferma en las últimas 48 horas:

                       </p>
                       <p>
                       <input type="radius" calue="certify" id="yes" placeholder="Si"/>
                       <input type="radius" calue="certify" id="no" placeholder="No"/>
                       </p>
                       <p>
                           Si <input type="radio" value="certify" id="yes" checked/> 
                           No <input type="radio" value="certify" id="no" checked/> 
                       </p>

                       </form>


                       

                </div>
        </div>

    )
}
export default Acompanante