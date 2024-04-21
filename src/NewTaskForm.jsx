import React from "react";

export default function NewTaskForm({newTask, setNewTask, handleSubmit} ) {
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
