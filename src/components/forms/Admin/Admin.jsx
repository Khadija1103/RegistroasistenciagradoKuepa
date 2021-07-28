import React, {useState} from "react" /*import react y crear el estado de la aplicación que pertenece a un componente*/ 
import '../css/Admin.css'/*Import the styles*/
import Birrete from '../../../assets/images/birrete.png' 
import Diploma from '../../../assets/diploma.png'


const Admin = (props) => { /*Traer de link*/

    const initialSateValues = { /*Guardar todo en una constante con valores iniciales*/
        nombre_estudiante: '',
        nombre:'',
        cargo:'',
        tel: '',
        apellido: '',
        certify:'',
    };

    const [values, setValues] = useState(initialSateValues) /*Definir el estado desde React, el set adquiere su nombre por el valor actual de la función*/

    const handleInputChange = e => { /*Captura los datos*/
        const {name,value} = e.target; /*Me va a mostrar esos campos específicos dentro de llaves*/
        setValues({...values, [name]: value}) /*Copie lo que actualmente tiene y con el input que está actualziando coloca ese input*/
        
    }

    const handlesubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialSateValues})/*Guarda los datos y los devuelve al estado inicial a través del value en el input*/
    }
    return (
        <div className="Container_Admin"> 

                <div className="Box"> 
                    <img id="img2" src={Birrete} alt="Esta es la img2" />
                    <img id="img3" src={Diploma} alt="Esta es la img" />
                    <h1>
                        ADMINISTRATIVO
                    </h1>

                    <form action="" onSubmit={handleSubmit}>
                        <p>
                             <input type="text" name="nombre_estudiante" id="nombre_estudiante" onChange={handleInputChange} value={values.nombre_estudiante} placeholder="Nombre del estudiante" />
                       </p>
                       <p>
                           <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Nombre" />
                       </p>
                       <p>
                           <input type="text" name="apellido" id="apellido" onChange={handleInputChange} value={values.apellido} placeholder="Apellido"/>
                       </p>
                       <p>
                           <input type="number" name="tel" id="tel" onChange={handleInputChange} value={values.tel} placeholder="Teléfono"/>
                       </p>
                       <p>
                           <input type="text" name="cargo" id="cargo"onChange={handleInputChange} value={values.cargo} placeholder="Cargo"/>
                       </p>
                       

                       <p>
                           Ha tenido síntomas de COVID-19 o contacto on alguna persona enferma en las últimas 48 horas:

                       </p>
                       <p>
                           Si <input type="radio" value="certify" onChange={handleInputChange} id="yes" value={values.certify} checked/> 
                           No <input type="radio" value="certify" onChange={handleInputChange} id="no" value={values.certify} checked/> 
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