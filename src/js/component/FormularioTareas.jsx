import React, { useState } from "react";

const FormularioTareas = (props) => {
	const [nombreTarea, setNombreTarea] = useState("");

	const guardarTarea = (e) => {
		const auxTarea = {};
		auxTarea.label = e.target.value;
		auxTarea.done = false;

		setNombreTarea(auxTarea);
	};
	const guardarNombre = () => {
		props.tarea(nombreTarea);
	};
	return (
		<div id="input">
			<input
				type="text"
				placeholder="Tarea Aqui"
				onChange={guardarTarea}
			/>
			<button onClick={guardarNombre}>Guardar</button>
		</div>
	);
};

export default FormularioTareas;
