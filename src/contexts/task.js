import { createContext, useContext } from 'react';

const initValue = {
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  completeTask: () => {},
};

const TaskContext = createContext(initValue);

function useTasks() {
  return useContext(TaskContext);
}

export { useTasks, TaskContext};
