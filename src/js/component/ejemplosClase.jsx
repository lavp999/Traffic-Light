import propTypes from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const EjemplosClase = () => {
	const [texto, setTexto] = useState("Hello Rigo!");

	const [valor, setValor] = useState("Inicial");

	const handleClick = (event) =>{
		setTexto(valor);
	}

	const handleChange = (event) =>{
		setValor(event.target.value);
	}

    const productos = [
        { name: "agua", precio: "1",  imagen: "https://m.media-amazon.com/images/I/61OBCib82UL._AC_SY741_PIbundle-20,TopRight,0,0_SH20_.jpg"},
        { name: "agua", precio: "2",  imagen: "https://m.media-amazon.com/images/I/61OBCib82UL._AC_SY741_PIbundle-20,TopRight,0,0_SH20_.jpg"}
    ]

	return (
		<>
			<div className="text-center">
				<h1 className="text-center mt-5">
				{texto}
				</h1>
				<button onClick={handleClick}>Cambiar texto</button>
			</div>
		
            <br />

			<div className="text-center">
				<input type="text" name="search" onKeyUp={handleChange}/>
				<button onClick={handleClick}>Buscar</button>
			</div>
		
            <br />

            <div className="container">
                <div className="row">
                    productos.map((producto) {
                        return <div className="col-12 col-md-4">
                                    <Producto name={productos.name} precio = {productos.precio} imagen= {productos.imagen} />
                               </div>
                    });
                </div>    
            </div>            
		</>
	);
};

export default EjemplosClase;
