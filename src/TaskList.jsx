import React from "react";

export default function TaskList({listName, tasklist, taskStatus, gaslight, toggleTodo, handleDelete}) {
    return (
        <>
        <h2>{listName}</h2>
        <ul>
          {tasklist.length === 0 && <p>{gaslight}</p>}
          {tasklist.map(todo => {
            if (todo.completed === taskStatus) {
              return (
                <li id={todo.id}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => toggleTodo(e, todo.id)}
                      checked={todo.completed}
                    />
                    {todo.task}
                  </label>
                  <button onClick={(e) => {
                    handleDelete(e, todo)
                  }}>Delete</button>
                </li>
              )
            } else {
              return ''
            }
          })}
        </ul>
        </>
    )
}