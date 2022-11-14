import { element } from "prop-types";
import React, { useState } from "react";
import reactDom from "react-dom";
import { resolvePath } from "react-router";

//create your first component
const Home = () => {

	let cambioCada = 10;
	let semaforoActual = "";

	const [colores, semColores] = useState({color: ["rojo", "amarillo", "verde", "rosa"],
											normal: ["circulo rojo", "circulo amarillo", "circulo verde", "circulo rosa"],
											iluminado: ["circulo rojo brillo", "circulo amarillo brillo", "circulo verde brillo", "circulo rosa brillo"],
											activo: [true, false, false, false]
										   });

	const [ intervalo, setIntervalo] = useState();
	const [ contador, setContador] = useState(0);
	const [ semRojo, setSemRojo] = useState(colores.iluminado[colores.color.indexOf("rojo")]);
	const [ semAmarillo, setSemAmarillo] = useState(colores.normal[colores.color.indexOf("amarillo")]);
	const [ semVerde, setSemVerde] = useState(colores.normal[colores.color.indexOf("verde")]);
	const [ semRosa, setSemRosa] = useState(colores.normal[colores.color.indexOf("rosa")]);


	function creaSemaforos(){
		return semaforoActual = colores.color.map((elemento, index)=>{
				/*<button id={index} name={elemento} className={colores.activo[index] ? colores.iluminado[index] : colores.normal[index] } onClick={cambiaManual}></button>;*/
				<button></button>;
		});
	}


	function desactiva(){
		setSemRojo(colores.normal[colores.color.indexOf("rojo")]);
		setSemAmarillo(colores.normal[colores.color.indexOf("amarillo")]);
		setSemVerde(colores.normal[colores.color.indexOf("verde")]);
		setSemRosa(colores.normal[colores.color.indexOf("rosa")]);
		semColores(colores, colores.activo = [false, false, false, false]); 
	}

	function activa(color){
		const posicion = colores.color.indexOf(color);
		clearInterval(intervalo);
		desactiva();
		if     (color == "rojo") 	 setSemRojo(colores.iluminado[posicion]);
		else if(color == "verde")	 setSemVerde(colores.iluminado[posicion]);
		else if(color == "amarillo") setSemAmarillo(colores.iluminado[posicion]);
		else 						 setSemRosa(colores.iluminado[posicion]);
		semColores(colores, colores.activo[posicion] = true);
		creaSemaforos();
		console.log(color, colores.activo[posicion], posicion);

	}
	
	function cambiaManual(color){
		clearInterval(intervalo);
		setContador(0);
		activa(color);
	}

	const cambiaManual2 = (evento)=>{
		clearInterval(intervalo);
		setContador(0);
		activa(evento.target.name);
	}


//	function cambioAutomatico(){
	const cambioAutomatico = () =>{
		if(contador > 0){
			setContador(contador - 1);
			console.log("contador sumando: ", contador);
		}else{
			setContador(cambioCada);
			console.log("contador Inicializado: ", contador, "a true: ", colores.activo.indexOf(true), "Que es:", colores.color[colores.activo.indexOf(true)], colores.color.length);
			const siguienteColor = colores.color[(colores.activo.indexOf(true) == (colores.color.length - 1) ? 0 : colores.activo.indexOf(true)+1)];
			console.log(siguienteColor);
			activa(siguienteColor);
		}
	}

	const asignaIntervalo = () => {
		setContador(0);
		setIntervalo(setInterval(cambioAutomatico, 1000));
		// cambioAutomatico();
	}

	return (
		<>
			<div className="centra semaforo">
				<div className="luces">
					{/*colores.color.map((elemento, index)=>{`<button id=${index} name=${elemento} className=circulo ${elemento} ${colores.activo[index] ? "brillo" : "" } onClick=${cambiaManual2}></button>`})*/}
					{/*colores.color.map((elemento, index)=>{`<button id=${index} name=${elemento} className=circulo ${elemento} ${colores.activo[index] ? "brillo" : "" } onClick=${cambiaManual2}></button>`})*/}
					<button name={colores.color[0]} className={`circulo ${colores.color[0]} ${colores.activo[0] ? "brillo" : "" }`} onClick={cambiaManual2}></button>
					<button name={colores.color[1]} className={`circulo ${colores.color[1]} ${colores.activo[1] ? "brillo" : "" }`} onClick={cambiaManual2}></button>
					<button name={colores.color[2]} className={`circulo ${colores.color[2]} ${colores.activo[2] ? "brillo" : "" }`} onClick={cambiaManual2}></button>
					<button name={colores.color[3]} className={`circulo ${colores.color[3]} ${colores.activo[3] ? "brillo" : "" }`} onClick={cambiaManual2}></button>
				</div>
			</div>
			{
			<div className="centra">
					<button className="centra boton" onClick={asignaIntervalo}>{contador <= 0 ? <i className="fas fa-history"></i> : contador}</button>
			</div>
			}
			{console.log(semaforoActual)}
		</>
	);
};

export default Home;