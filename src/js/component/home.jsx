import React, { useState } from "react";

//create your first component
const Home = () => {
	
	const [ color, setColor] = useState("red");


	return (
			<div className="semaforo">
				<div className="luces">
					<button className="circulo rojo"></button>
					<button className="circulo amarillo"></button>
					<button className="circulo verde"></button>
				</div>
			</div>
	);
};

export default Home;