import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

export default function App() {
  const [newTask, setNewTask] = React.useState("");
  const [tasklist, setTasklist] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNewTask("");
    
    if (!newTask) {
      alert("Am I a joke to you?");
    }

    setTasklist((currentTaskList) => {
      return [
        ...currentTaskList,
        {
          id: Math.random().toString(),
          task: newTask,
          completed: false
        }
      ]
    })
  }

  function toggleTodo(e, id) {
    setTasklist((currentlist) => {
      return currentlist.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  function handleDelete(e, todo) {
    setTasklist(tasklist.filter((bro) => {
      return bro.id !== todo.id
    }))
  }

  return (
    <>
      <h1>Vipul's gaslighting Todo App</h1>
      <NewTaskForm newTask={newTask} setNewTask={setNewTask} handleSubmit={handleSubmit} />

      {/* Todo for myself: May have overloaded this with props, wonder if it could be broken down further. */}
      <TaskList listName={"Tasks"} tasklist={tasklist} taskStatus={false} gaslight={"Set some tasks, why you like this?"} toggleTodo={toggleTodo} handleDelete={handleDelete} />

      <TaskList listName={"Completed tasks"} taskStatus={true} gaslight={"Aimless life. Taskless life."} tasklist={tasklist} toggleTodo={toggleTodo} handleDelete={handleDelete} />

    </>
  );
}