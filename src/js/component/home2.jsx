import React, { useState } from "react";
import reactDom from "react-dom";

//create your first component
const Home2 = () => {

	const colores =[
		{rojo: "circulo rojo", 		  verde: "circulo verde", 		 amarillo: "circulo amarillo"},
		{rojo: "circulo rojo brillo", verde: "circulo verde brillo", amarillo: "circulo amarillo brillo"}
	]
	
	const [ intervalo, setIntervalo] = useState();
	const [ contador, setContador] = useState(0);
	const [ semRojo, setSemRojo] = useState(colores[1].rojo);
	const [ semAmarillo, setSemAmarillo] = useState(colores[0].amarillo);
	const [ semVerde, setSemVerde] = useState(colores[0].verde);

	function desactiva(){
		setSemRojo(colores[0].rojo);
		setSemAmarillo(colores[0].amarillo);
		setSemVerde(colores[0].verde);
	}

	const activaRojo = () =>{
		clearInterval(intervalo);
		setContador(0);
		desactiva();
		setSemRojo(colores[1].rojo);
	}

	const activaAmarillo = () =>{
		clearInterval(intervalo);
		setContador(0);
		desactiva();
		setSemAmarillo(colores[1].amarillo);
	}

	const activaVerde = () =>{
		clearInterval(intervalo);
		setContador(0);
		desactiva();
		setSemVerde(colores[1].verde);
	}

	const asignaInervalo = () => {
		setIntervalo(setInterval(cambioAutomatico, 1000));
	}

	function cambioAutomatico(){
		if(contador <= 0){
			setContador(10);
			if(semRojo == colores[1].rojo){
				desactiva();
				setSemAmarillo(colores[1].amarillo);
			}else if(semAmarillo == colores[1].amarillo){
				desactiva();
				setSemVerde(colores[1].verde);
			}else{
				desactiva();
				setSemRojo(colores[1].rojo);
			}
		}else{
			setContador(contador - 1);
		}
	}

	return (
		<>
			<div className="centra semaforo">
				<div className="luces">
					<button className={semRojo} onClick={activaRojo}>{contador == 0 ? "" : contador}</button>
					<button className={semAmarillo} onClick={activaAmarillo}>{contador == 0 ? "" : contador}</button>
					<button className={semVerde} onClick={activaVerde}>{contador == 0 ? "" : contador}</button>
				</div>
			</div>
			<div className="centra">
				<div>
					<button className="centra boton" onClick={asignaInervalo}><i className="fas fa-history"></i></button>
				</div>
			</div>
		</>
	);
};

export default Home2;