import React from 'react';

const AddTaskModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 w-full max-w-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <button onClick={closeModal} className="bg-gray-200 px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
};

export default AddTaskModal;

