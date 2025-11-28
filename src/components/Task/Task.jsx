import React, { useEffect, useRef, useState } from 'react';
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import './task.css';

function resizeTextArea(text_area) {
  if (text_area) {
    text_area.style.height = 'auto';
    text_area.style.height = text_area.scrollHeight + 'px';
  }
}

function Task({
  task = {},
  editTask = () => {},
  deleteTask = () => {},
  updateStatus = () => {},
}) {
  const [text, setText] = useState(task.text);
  const [editing, setEditing] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      resizeTextArea(textAreaRef.current);
    });
  }, [task]);

  const handleChange = (e) => {
    setText(e.target.value);
    resizeTextArea(textAreaRef.current);
  };

  const handleSave = () => {
    if (text.trim()) {
      editTask(task.id, text.trim());
      setEditing(false);
    }
  };

  const moveToProgress = () => {
    updateStatus(task.id, 'in-progress');
  };

  const toggleCompleted = () => {
    if (task.status === 'completed') {
      updateStatus(task.id, task.prev_status || 'not-started');
    } else {
      updateStatus(task.id, 'completed', task.status);
    }
  };

  return (
    <div className="task-item">
      <div className="task-input">
        <textarea
          ref={textAreaRef}
          value={text}
          readOnly={!editing}
          rows={1}
          onChange={handleChange}
          className={`task-text ${editing ? 'editing' : ''}`}
        />
      </div>

      <div className="task-actions">
        <input
          type="checkbox"
          checked={task.status === 'completed'}
          onChange={toggleCompleted}
          style={{ cursor: 'pointer', marginTop: '10px', marginRight: '8px' }}
        />
        {task.status !== 'in-progress' && (
          <button
            type="button"
            className="icon-btn progress-btn"
            onClick={moveToProgress}
            title="Move to In-Progress"
          >
            <PlayIcon className="icon" />
          </button>
        )}
        {!editing ? (
          <button
            type="button"
            className="icon-btn edit-btn"
            onClick={() => setEditing(true)}
            title="Edit"
          >
            <PencilSquareIcon className="icon" />
          </button>
        ) : (
          <button
            type="button"
            className="icon-btn save-btn"
            onClick={handleSave}
            title="Save"
          >
            <CheckIcon className="icon" />
          </button>
        )}
        <button
          type="button"
          className="icon-btn delete-btn"
          onClick={() => deleteTask(task.id)}
          title="Delete"
        >
          <TrashIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Task);
