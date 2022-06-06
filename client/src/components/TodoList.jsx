import React, { useState, useEffect } from "react";
import config from "../config.json";

import TodoEdit from "./TodoEdit";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`${config.apiURL}/todos`);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${config.apiURL}/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table-fixed mt-5 text-xl">
        <thead>
          <tr>
            <th>Description</th>
            <th className="w-1">Edit</th>
            <th className="w-1">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <TodoEdit todo={todo} />
              </td>
              <td>
                <button
                  className="rounded bg-red-600 text-white px-6 py-3 hover:bg-red-700 uppercase"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
