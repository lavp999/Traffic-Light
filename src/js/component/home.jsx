import React, { useState } from "react";
import reactDom from "react-dom";
import { resolvePath } from "react-router";

//create your first component
const Home = () => {

	let cambioCada = 45;

	let colores ={
		color: ["rojo", "amarillo", "verde", "rosa"],
		estiloNormal: ["circulo rojo", "circulo amarillo", "circulo verde", "circulo rosa"],
		estiloIluminado: ["circulo rojo brillo", "circulo amarillo brillo", "circulo verde brillo", "circulo rosa brillo"],
		activo: [true, false, false, false]
	}

	const [ intervalo, setIntervalo] = useState();
	const [ contador, setContador] = useState(0);
	const [ semRojo, setSemRojo] = useState(colores.estiloIluminado[colores.color.indexOf("rojo")]);
	const [ semAmarillo, setSemAmarillo] = useState(colores.estiloNormal[colores.color.indexOf("amarillo")]);
	const [ semVerde, setSemVerde] = useState(colores.estiloNormal[colores.color.indexOf("verde")]);
	const [ semRosa, setSemRosa] = useState(colores.estiloNormal[colores.color.indexOf("rosa")]);

	function desactiva(){
		setSemRojo(colores.estiloNormal[colores.color.indexOf("rojo")]);
		setSemAmarillo(colores.estiloNormal[colores.color.indexOf("amarillo")]);
		setSemVerde(colores.estiloNormal[colores.color.indexOf("verde")]);
		colores.activo = [false, false, false];
	}

	function activa(color){
		const posicion = colores.color.indexOf(color);
		clearInterval(intervalo);
		desactiva();
		if (color == "rojo") 		setSemRojo(colores.estiloIluminado[posicion]);
		else if(color == "verde")	setSemVerde(colores.estiloIluminado[posicion]);
		else 						setSemAmarillo(colores.estiloIluminado[posicion]);
		colores.activo[posicion] = true;
	}
	
	function cambiaManual(color){
		clearInterval(intervalo);
		setContador(0);
		activa(color);
	}

	const cambiaManual2 = (evento)=>{
		console.log("Hola"); 
		console.log(evento.target.name); 
		colores.activo[3] = true;
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
					<button name="rojo" className={semRojo} onClick={()=> {cambiaManual("rojo")}}></button>
					<button name={colores.color[1]} className={semAmarillo} onClick={()=> {cambiaManual("amarillo")}}></button>
					<button name={colores.color[2]} className={semVerde} onClick={()=> {cambiaManual("verde")}}></button>
					<button name={colores.color[3]} className={`circulo ${colores.color[3]} ${colores.activo[3] ? "brillo" : "" }`} onClick={cambiaManual2}></button>
				</div>
			</div>
			{
			<div className="centra">
					<button className="centra boton" onClick={asignaIntervalo}>{contador <= 0 ? <i className="fas fa-history"></i> : contador}</button>
			</div>
			}
		</>
	);
};

export default Home;