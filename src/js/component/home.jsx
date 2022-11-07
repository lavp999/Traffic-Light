import React, { useState } from "react";

//create your first component
const Home = () => {
	
	const [ semRojo, setSemRojo] = useState("circulo rojo");
	const [ semAmarillo, setSemAmarillo] = useState("circulo amarillo");
	const [ semVerde, setSemVerde] = useState("circulo verde");

	const activaRojo = (evento) =>{
		setSemRojo("blue");
	}

	const activaAmarillo = (evento) =>{
		setSemAmarillo("blue");
	}

	const activaVerde = (evento) =>{
		setSemVerde("blue");
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