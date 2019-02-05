import React, { useState } from "react";

import Todo from "./Todo";
import TodoForm from './TodoForm';


const Hook = () => {
  const [todos, setTodos] = useState([
    {
      text: "learn spanish",
      isCompleted: false
    },
    {
      text: "workout",
      isCompleted: false
    },
    {
      text: "pay bills",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false}]
    setTodos(newTodos)
  }

  return (
    <div >
      <div style={{marginTop: '64px'}}>
      <h1>Hook</h1>
      {todos.map((todo, index) => {
        return (
          <Todo key={index} text={todo.text} isCompleted={todo.isCompleted} />
        );
      })}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default Hook
