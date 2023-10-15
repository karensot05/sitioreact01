import React, {useState, Fragment} from 'react';

const Contador = () => {

    //"numero" nombre del estado
    //"setNumero" es su modificador
    //Se puede iniciar con numero, bolean, obj., matriz, etc.

    const [numero, setNumero] = useState(0);

    //Definiendo funcion fecha que incremente un valor
    const aumentar = () =>{
        console.log("Hacer click");
        setNumero(numero + 1);
    }

    //Dentro de HTML, se da lectura en llaves a las variables
    //Se puede devolver solo en elemento..., caso contrario
    //Se puede usar <Fragment> tambien <div>
    //En el evento onClick se llama  a la funcion flecha entre llaves
    return(
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
            </Fragment>
    );
}

export default Contador;