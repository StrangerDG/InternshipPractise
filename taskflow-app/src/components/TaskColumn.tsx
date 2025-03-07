import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
}

// interface TaskColumnProps {
//   status: 'todo' | 'in-progress' | 'completed';
//   tasks: Task[];
//   moveTask: (taskId: number, newStatus: 'todo' | 'in-progress' | 'completed') => void;
// }
interface TaskColumnProps {
  status: 'todo' | 'in-progress' | 'completed';
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  moveTask: (taskId: number, newStatus: 'todo' | 'in-progress' | 'completed') => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks, moveTask }) => {
  const handleMoveTask = (taskId: number, newStatus: 'todo' | 'in-progress' | 'completed') => {
    moveTask(taskId, newStatus);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 capitalize">{status}</h3>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-3 mb-2 rounded shadow-sm">
            <h4 className="font-bold">{task.title}</h4>
            <p>{task.description}</p>
            <div className="flex gap-2 mt-2">
              {status !== 'todo' && (
                <button
                  onClick={() => handleMoveTask(task.id, 'todo')}
                  className="bg-blue-200 px-2 py-1 rounded"
                >
                  Move to Todo
                </button>
              )}
              {status !== 'in-progress' && (
                <button
                  onClick={() => handleMoveTask(task.id, 'in-progress')}
                  className="bg-yellow-200 px-2 py-1 rounded"
                >
                  Move to In-Progress
                </button>
              )}
              {status !== 'completed' && (
                <button
                  onClick={() => handleMoveTask(task.id, 'completed')}
                  className="bg-green-200 px-2 py-1 rounded"
                >
                  Move to Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
