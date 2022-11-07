import React, { useState } from "react";
import reactDom from "react-dom";

//create your first component
const Home = () => {

	const colores =[
		{rojo: "circulo rojo", verde: "circulo verde", amarillo: "circulo amarillo"},
		{rojo: "circulo rojo brillo", verde: "circulo verde brillo", amarillo: "circulo amarillo brillo"}
	]
	
	const [ semRojo, setSemRojo] = useState(colores[0].rojo);
	const [ semAmarillo, setSemAmarillo] = useState(colores[0].amarillo);
	const [ semVerde, setSemVerde] = useState(colores[0].verde);

	function desactiva(){
		setSemRojo(colores[0].rojo);
		setSemAmarillo(colores[0].amarillo);
		setSemVerde(colores[0].verde);
	}


	const activaRojo = (evento) =>{
		desactiva();
		setSemRojo(colores[1].rojo);
	}

	const activaAmarillo = (evento) =>{
		setSemAmarillo(colores[1].amarillo);
	}

	const activaVerde = (evento) =>{
		setSemVerde(colores[1].verde);
	}

	return (
			<div className="semaforo">
				<div className="luces">
					<button className={semRojo} onClick={activaRojo}></button>
					<button className={semAmarillo} onClick={activaAmarillo}></button>
					<button className={semVerde} onClick={activaVerde}></button>
				</div>
			</div>
	);
};

export default Home;