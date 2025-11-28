import { useCallback } from 'react';
import { TaskContext } from '../contexts/task';
import useLocalStorage from '../hooks/useLocalStorage';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = useCallback(
    (taskId, text) => {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: taskId, text, status: 'not-started', prev_status: 'not-started' },
      ]);
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
    },
    [setTasks]
  );

  const editTask = useCallback(
    (id, text) => {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id !== id ? t : { ...t, text: text }))
      );
    },
    [setTasks]
  );

  const updateStatus = useCallback(
    (id, status, prev_status) => {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id !== id ? t : { ...t, status, prev_status }))
      );
    },
    [setTasks]
  );

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, updateStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
