import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard/TaskBoard';
import Toggle from './components/Toggle/Toggle';
import { useTasks } from './contexts/task';
import { useTheme } from './contexts/theme';

const tabs = ['Not-started', 'In-progress', 'Completed'];

function App() {
  const { tasks, addTask } = useTasks();
  const { theme, toggleTheme } = useTheme();

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
      <TaskBoard tasks={tasks} tabs={tabs} />
    </div>
  );
}

export default App;
