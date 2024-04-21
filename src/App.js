import React, { useEffect } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

export default function App() {
  const [tasklist, setTasklist] = React.useState(() => {    
    return JSON.parse(localStorage.getItem("tasklist")) || []
  });

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist])

  function addTodo(newTask) {
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
      <NewTaskForm onSubmit={addTodo} />

      {/* Todo for myself: May have overloaded this with props, wonder if it could be broken down further. */}
      <TaskList listName={"Tasks"} tasklist={tasklist} taskStatus={false} gaslight={"Set some tasks, why you like this?"} toggleTodo={toggleTodo} handleDelete={handleDelete} />

      <TaskList listName={"Completed tasks"} taskStatus={true} gaslight={"Aimless life. Taskless life."} tasklist={tasklist} toggleTodo={toggleTodo} handleDelete={handleDelete} />

    </>
  );
}