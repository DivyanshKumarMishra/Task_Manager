import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useTasks } from '../../contexts/task';
import Task from '../Task/Task';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './board.css';

function getTabTasks(tasks, tabs) {
  return tabs.reduce((acc, tab) => {
    const id = tab.toLowerCase();
    acc[tab] = {
      id,
      tasks: tasks.filter((t) => t.status === id),
    };
    return acc;
  }, {});
}

function TaskBoard({ tasks = [], tabs = [] }) {
  const { updateStatus, deleteTask, editTask } = useTasks();
  const grouped = useMemo(() => getTabTasks(tasks, tabs), [tasks, tabs]);
  const [tabTasks, setTabTasks] = useState(grouped);

  useEffect(() => {
    setTabTasks(grouped);
  }, [grouped]);

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;
      const { source, destination, draggableId } = result;

      if (source.droppableId !== destination.droppableId) {
        updateStatus(draggableId, destination.droppableId);
        return;
      }

      const colName = Object.keys(tabTasks).find(
        (name) => name.toLowerCase() === source.droppableId
      );

      const column = tabTasks[colName];
      const reordered = [...column.tasks];

      const [moved] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, moved);

      setTabTasks({
        ...tabTasks,
        [colName]: { ...column, tasks: reordered },
      });
    },
    [tabTasks, updateStatus]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        {Object.entries(tabTasks).map(([colName, column]) => (
          <div key={colName} className={`kanban-column`}>
            <h2 className={`column-title ${column.id}`}>{colName}</h2>

            <Droppable droppableId={column.id} isDropDisabled={false}>
              {(provided) => (
                <div
                  className="task-column-body"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.tasks.map((task, idx) => (
                    <Draggable key={task.id} draggableId={task.id} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          className={`task-wrapper ${column.id} ${snapshot.isDragging ? "dragging" : ""}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Task
                            task={task}
                            editTask={editTask}
                            deleteTask={deleteTask}
                            updateStatus={updateStatus}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}

export default React.memo(TaskBoard);
