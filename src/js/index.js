//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// durante la clase import EjemplosClase from "./component/ejemplosClase.jsx";
// ReactDOM.render(<EjemplosClase />, document.querySelector("#app"));

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
