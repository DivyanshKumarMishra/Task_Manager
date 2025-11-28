# Kanban Style Task Manager

A modern, responsive task management application built with React and featuring drag-and-drop functionality for organizing tasks across different columns (To Do, In Progress, Done).

## 🛠️ Tech Stack

- **React 19** - UI library for building component-based interfaces
- **Vite** - Modern, lightning-fast build tool and development server
- **@hello-pangea/dnd** - Drag-and-drop library for Kanban functionality
- **@heroicons/react** - Beautiful, hand-crafted SVG icon library

## 📋 Features

- ✨ Drag-and-drop task management across columns
- 📝 Create, read, update, and delete tasks
- 🎨 Clean and intuitive user interface
- 📱 Responsive design
- ⚡ Fast development experience with Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd task_manager
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port)

#### Production Build

Create an optimized production build:

```bash
npm run build
```

#### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

#### Linting

Check code quality and lint errors:

```bash
npm run lint
```

## 📂 Project Structure

```
task_manager/
├── src/
│   ├── components/      # Reusable React components
│   ├── contexts/        # React Context API files
│   ├── hooks/           # Custom React hooks
│   ├── providers/       # Context providers
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # This file
```
