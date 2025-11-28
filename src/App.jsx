import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard/TaskBoard';
import Toggle from './components/Toggle/Toggle';
import { useTasks } from './contexts/task';
import { useTheme } from './contexts/theme';
import { useCallback, useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';

const tabs = ['Not-started', 'In-progress', 'Completed'];

function App() {
  const { tasks, addTask } = useTasks();
  const { theme, toggleTheme } = useTheme();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchTerm, setSearchTerm] = useState('');

  const filterFunction = useCallback(
    (text) => {
      const query = text.toLowerCase().trim();
      setFilteredTasks(
        query
          ? tasks.filter((item) => item.text.toLowerCase().includes(query))
          : tasks
      );
    },
    [tasks]
  );

  useEffect(() => {
    async function filterTasks() {
      filterFunction(searchTerm);
    }

    filterTasks();
  }, [tasks, filterFunction]);

  const debouncedSearch = useDebounce(filterFunction, 300);

  return (
    <div className="container">
      <div className="header-row">
        <div className="heading">
          <h1 className="app-heading">Task Manager</h1>
        </div>
        <Toggle
          labelLeft="🌞"
          labelRight="🌛"
          checked={theme === 'dark'}
          onToggle={toggleTheme}
        />
      </div>

      <TaskForm addTask={addTask} />

      <input
        className="search-box"
        value={searchTerm}
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => {
          const val = e.target.value;
          setSearchTerm(val);
          debouncedSearch(val);
        }}
      />

      <TaskBoard tasks={filteredTasks} tabs={tabs} />
    </div>
  );
}

export default App;
