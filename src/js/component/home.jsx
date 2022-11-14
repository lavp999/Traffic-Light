import React, { useState } from "react";

//create your first component
const Home = () => {

	const [lucesHtml, semLucesHtml] = useState([]);
	const [colores, semColores] = useState({color: ["rojo", "amarillo", "verde"],
											normal: ["circulo rojo", "circulo amarillo", "circulo verde"],
											iluminado: ["circulo rojo brillo", "circulo amarillo brillo", "circulo verde brillo"],
											activo: [true, false, false, false]
										   });

	const creaLuces = ()=>{
		semLucesHtml(colores.color.map((elemento, index)=>{
				return <button id={index} name={elemento} className={colores.activo[index] ? colores.normal[index] : colores.normal[index] } onClick={activa}></button>;
		}));

	}

	function desactiva(){ 
		semColores(colores, colores.activo = colores.color.map(()=>false));  
		creaLuces();
	}

	function ponRosa(){ 
		// se podrían pedir datos por pantalla y meterlos desde ahí, pero todavía no se como solucionar lo del css
		semColores(colores, colores.color.push("rosa"), colores.normal.push("circulo rosa"), colores.iluminado.push("circulo rosa brillo"), colores.activo.push(true));
		creaLuces();
	}
	function quitaRosa(){ 
		// habría que depurar el pop
		semColores(colores, colores.color = colores.color.filter(color=> color != "rosa")
						  , colores.normal = colores.normal.filter(color=> color != "circulo rosa")
						  , colores.iluminado = colores.iluminado.filter(color=> color != "circulo rosa brillo")
						  , colores.activo.pop());
		creaLuces();
		}

	const activa = (evento) => {
		console.log(evento.target.name);

		const posicion = colores.color.indexOf(evento.target.name);
		desactiva();
		semColores(colores, colores.activo[posicion] = true);
		creaLuces();
	}

	return (
		<>
			<div className="centra semaforo">
				<div className="luces">
					{colores && colores.color.map((elemento, index)=>{
									return <button id={index} name={elemento} className={colores.activo[index] ? colores.iluminado[index] : colores.normal[index] } onClick={activa}></button>;
									})
					}
				</div>
			</div>
			{colores.color.length <= 3 ? 
					<div className="centra">
						<button name="ponerRosa" className="centra boton" onClick={ponRosa}>Añadir Rosa</button>
					</div>
					:
					<div className="centra">
						<button name="quitarRosa" className="centra boton" onClick={quitaRosa}>Quitar Rosa</button>
					</div>
			}
		</>
	);
};

export default Home;