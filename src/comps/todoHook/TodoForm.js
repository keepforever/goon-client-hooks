import React, { useState } from "react";

export default ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    // clear form
    setValue('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add a todo..."
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ width: "400px", height: "65px", fontSize: '20px' }}
      />
    </form>
  );
};
