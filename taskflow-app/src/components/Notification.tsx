// src/components/Notification.tsx
import React from 'react';

const Notification: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg">
      <p>{message}</p>
    </div>
  );
};

export default Notification;