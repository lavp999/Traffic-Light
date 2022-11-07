import React, { useState } from "react";


const Productos = (props)=>{

    const suma = ()=> setContador(props.contador+1);
    const resta = ()=> setContador(props.contador-1);

    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={props.imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.precio}€</p>
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                <button onClick={suma}> + </button>
                <button onClick={resta}> - </button>

                {props.contador>0 ? <p>Total productos seleccionados {props.contador}</p> : ""}
            </div>
        </div>
    )
}

export default Productos;