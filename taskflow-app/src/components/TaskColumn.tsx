import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn: React.FC<{ status: string }> = ({ status }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{status}</h2>
      <TaskCard title="Sample Task" description="Task description" priority="high" />
    </div>
  );
};

export default TaskColumn;