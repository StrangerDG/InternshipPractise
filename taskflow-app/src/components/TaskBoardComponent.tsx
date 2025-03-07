import React from 'react';

// Define the Task type
interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
}

// Define the props for TaskBoardComponent
interface TaskBoardProps {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
}

const TaskBoardComponent: React.FC<TaskBoardProps> = ({ tasks, addTask }) => {
  return (
    <div>
      {/* Render tasks here */}
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
      {/* Add task button */}
      <button onClick={() => addTask('New Task', 'Task Description')}>
        Add Task
      </button>
    </div>
  );
};

export default TaskBoardComponent;
