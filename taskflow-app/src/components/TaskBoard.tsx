import React from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {['todo', 'in-progress', 'completed'].map(status => (
        <TaskColumn key={status} status={status} />
      ))}
    </div>
  );
};

export default TaskBoard;