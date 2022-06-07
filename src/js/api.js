const CreateUser = (nombre) => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user/${nombre}`, {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp.text());
			return resp.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

const listarUsuarios = () => {
	return fetch(`https://assets.breatheco.de/apis/fake/todos/user/isabel`, {
		method: "GET", // PUEDE ESTAR EN MINUISCULAS
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			return resp.json();
		})

		.catch((error) => {
			console.log(error);
			return null;
		});
};
const deleteTarea = (tarea) => {
	return fetch(
		`https://assets.breatheco.de/apis/fake/todos/user/isabel/${tarea}`,
		{
			method: "DELETE", // PUEDE ESTAR EN MINUISCULAS

			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((resp) => {
			return resp.json();
		})

		.catch((error) => {
			console.log(error);
			return null;
		});
};
const actualizarTarea = (tareas) => {
	fetch(`https://assets.breatheco.de/apis/fake/todos/user/isabel`, {
		method: "PUT",
		body: JSON.stringify(tareas),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp.text());
			return resp.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};
export default { CreateUser, listarUsuarios, deleteTarea, actualizarTarea };
