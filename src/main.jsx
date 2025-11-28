import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import TaskProvider from './providers/TaskProvider.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </ThemeProvider>
);
