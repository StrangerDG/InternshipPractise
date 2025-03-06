import React, { useState } from 'react';
import TaskBoard from '../components/TaskBoard';
import TaskChart from '../components/TaskChart';
import AddTaskModal from '../components/AddTaskModal';
import Notification from '../components/Notification';

const Home: React.FC = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white border-b px-4 py-4 text-2xl font-bold text-indigo-600">
        TaskFlow
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => setIsAddTaskModalOpen(true)} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
        <TaskChart />
        <TaskBoard />
      </main>
      {isAddTaskModalOpen && <AddTaskModal closeModal={() => setIsAddTaskModalOpen(false)} />}
      {notification.show && <Notification message={notification.message} />}
    </div>
  );
};

export default Home;