import React, { useState } from 'react';

function TaskForm({ addTask = () => {} }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(crypto.randomUUID(), text);
    setText('');
  };

  return (
    <div className="form-container">
      <div className="task-form">
        <input
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" className="add-button" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default React.memo(TaskForm);
