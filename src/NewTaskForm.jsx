import React from "react";

export default function NewTaskForm({ onSubmit }) {
	const [newTask, setNewTask] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!newTask) {
			alert("Am I a joke to you?");
			return;
		}
		onSubmit(newTask);
		setNewTask("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="item">Add New Task</label>
			<br />
			<br />
			<input
				type="text"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			/>
			<br />
			<br />
			<button>Task this</button>
		</form>
	);
}
