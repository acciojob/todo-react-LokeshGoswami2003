import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
