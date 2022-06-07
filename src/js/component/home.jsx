import React, { useState, useEffect } from "react";

import api from "../api.js";

import FormularioTareas from "./FormularioTareas.jsx";

//create your first component
const Home = () => {
	const [tareas, setListaTareas] = useState([]);
	useEffect(() => {
		api.listarUsuarios().then((data) => {
			setListaTareas(data);
		});
	}, [setListaTareas]);
	const agregarTarea = (tarea) => {
		const auxTareas = tareas.concat(tarea);
		api.actualizarTarea(auxTareas);
		setListaTareas(auxTareas);
	};
	const eliminarTarea = (index) => {
		const auxTareas = tareas.filter((tarea, auxIndex) => {
			if (index !== auxIndex) {
				return tarea;
			}
		});
		api.actualizarTarea(tareas[index]);
		setListaTareas(auxTareas);
	};

	return (
		<div className="container">
			<h1>Lista de Tareas</h1>
			<FormularioTareas tarea={agregarTarea} />
			{tareas.map((tarea, index) => {
				if (tarea.done === false) {
					return (
						<div key={index}>
							<h5>
								<img
									id="gato"
									src="https://static.vecteezy.com/system/resources/previews/000/568/456/non_2x/cat-icon-vector.jpg"
									alt=""
								/>
								{tarea.label}
								<button
									id="eliminar"
									onClick={() => {
										eliminarTarea(index);
									}}>
									Eliminar
								</button>
							</h5>
						</div>
					);
				}
			})}
		</div>
	);
};
export default Home;
