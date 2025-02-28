import React, { useState } from 'react';
import { useDrag } from 'react-dnd/dist/hooks/useDrag';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', status: 'Todo' },
    { id: 2, name: 'Task 2', status: 'In Progress' },
    { id: 3, name: 'Task 3', status: 'Completed' },
  ]);

  const moveTask = (taskId: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  interface TaskProps {
    task: { id: number; name: string; status: string };
  }

  const Task = ({ task }: TaskProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [, drag] = useDrag({
      type: 'TASK',
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    drag(ref);

    return (
      <div
        ref={ref}
        className="task"
        style={{
          border: '1px solid black',
          padding: '10px',
          margin: '5px',
          cursor: 'move',
        }}
      >
        {task.name}
      </div>
    );
  };

  interface ColumnProps {
    status: string;
    children: React.ReactNode;
    onClick: (taskId: number | null) => void;
  }

  const Column = ({ status, children, onClick }: ColumnProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
      accept: 'TASK',
      drop: (item: { id: number }) => onClick(item.id),
    });

    drop(ref);

    return (
      <div
        ref={ref}
        className="column"
        style={{
          width: '200px',
          padding: '10px',
          margin: '5px',
          background: '#f0f0f0',
          minHeight: '200px',
        }}
        onClick={() => onClick(null)} // Reset task to Todo when column is clicked without dragging a task
      >
        <h3>{status}</h3>
        {children}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {['Todo', 'In Progress', 'Completed'].map((status) => (
        <Column
          key={status}
          status={status}
          onClick={(taskId: number | null) => {
            if (taskId !== null) {
              moveTask(taskId, status);
            } else {
              // Reset tasks in the clicked column to 'Todo'
              setTasks((prevTasks) =>
                prevTasks.map((task) =>
                  task.status === status ? { ...task, status: 'Todo' } : task
                )
              );
            }
          }}
        >
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </Column>
      ))}
    </div>
  );
};

export default TaskBoard;
