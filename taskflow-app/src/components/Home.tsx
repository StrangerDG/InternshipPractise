import React, { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import TaskBoardComponent from '../components/TaskBoardComponent'; // Make sure you use the correct name

// Define the Task type
interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: 'todo', // New tasks start in 'todo'
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <main>
        {/* Pass tasks and addTask props to TaskBoardComponent */}
        <TaskBoardComponent tasks={tasks} addTask={addTask} />

        {/* Pass addTask prop to AddTaskModal */}
        {isAddTaskModalOpen && (
          <AddTaskModal
            closeModal={() => setIsAddTaskModalOpen(false)}
            addTask={addTask} // Pass addTask here
          />
        )}
      </main>
    </div>
  );
};

export default Home;
