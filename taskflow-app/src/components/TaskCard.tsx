import React from 'react';

const TaskCard: React.FC<{ title: string; description: string; priority: string }> = ({
  title,
  description,
  priority,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-md">{priority}</span>
    </div>
  );
};

export default TaskCard;