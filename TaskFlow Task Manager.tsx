// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design New Landing Page',
      status: 'todo',
      priority: 'high',
      dueDate: '2025-03-10',
      description: 'Create a modern and engaging landing page design for our product launch',
    },
    {
      id: '2',
      title: 'Implement User Authentication',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-03-08',
      description: 'Set up secure user authentication system with OAuth integration',
    },
    {
      id: '3',
      title: 'Database Optimization',
      status: 'completed',
      priority: 'medium',
      dueDate: '2025-03-05',
      description: 'Optimize database queries and improve overall performance',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  });
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    const chart = echarts.init(document.getElementById('taskChart'));
    const option = {
      animation: false,
      title: {
        text: 'Task Overview',
        left: 'center',
        textStyle: {
          color: '#334155',
        },
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: tasks.filter(t => t.status === 'todo').length, name: 'To Do' },
            { value: tasks.filter(t => t.status === 'in-progress').length, name: 'In Progress' },
            { value: tasks.filter(t => t.status === 'completed').length, name: 'Completed' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [tasks]);

  const showNotification = (message: string) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
  };

  const addTask = () => {
    if (!newTask.title || !newTask.dueDate) {
      showNotification('Please fill in all required fields');
      return;
    }

    const task = {
      id: Date.now().toString(),
      status: 'todo',
      ...newTask,
    };

    setTasks([...tasks, task]);
    setIsAddTaskModalOpen(false);
    setNewTask({ title: '', description: '', priority: 'medium', dueDate: '' });
    showNotification('Task added successfully');
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fas fa-tasks text-indigo-600 text-2xl"></i>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TaskFlow
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button text-gray-600 hover:text-gray-800 cursor-pointer">
                <i className="fas fa-moon text-xl"></i>
              </button>
              <button className="!rounded-button text-gray-600 hover:text-gray-800 cursor-pointer">
                <i className="fas fa-user-circle text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border-none !rounded-button bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="border-none !rounded-button bg-white shadow-sm px-4 py-2 text-sm cursor-pointer"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <button
              onClick={() => setIsAddTaskModalOpen(true)}
              className="!rounded-button bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-plus mr-2"></i>
              Add Task
            </button>
          </div>
        </div>

        {/* Task Overview Chart */}
        <div className="mb-8 bg-white !rounded-button p-6 shadow-sm">
          <div id="taskChart" style={{ height: '300px' }}></div>
        </div>

        {/* Task Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['todo', 'in-progress', 'completed'].map((status) => (
            <div key={status} className="bg-white !rounded-button p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
                {status === 'todo' && 'To Do'}
                {status === 'in-progress' && 'In Progress'}
                {status === 'completed' && 'Completed'}
                <span className="bg-gray-100 text-gray-600 px-2 py-1 !rounded-button text-sm">
                  {filteredTasks.filter(t => t.status === status).length}
                </span>
              </h2>
              <div className="space-y-4">
                {filteredTasks
                  .filter(task => task.status === status)
                  .map(task => (
                    <div
                      key={task.id}
                      className="bg-white border border-gray-200 !rounded-button p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-900">{task.title}</h3>
                        <span
                          className={`px-2 py-1 !rounded-button text-xs ${
                            task.priority === 'high'
                              ? 'bg-red-100 text-red-800'
                              : task.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{task.description}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                        <span>Due: {task.dueDate}</span>
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-gray-400 hover:text-red-600 cursor-pointer">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add Task Modal */}
      {isAddTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white !rounded-button p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full border-gray-300 !rounded-button shadow-sm text-sm"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full border-gray-300 !rounded-button shadow-sm text-sm"
                  rows={3}
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    className="w-full border-gray-300 !rounded-button shadow-sm text-sm"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    className="w-full border-gray-300 !rounded-button shadow-sm text-sm"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsAddTaskModalOpen(false)}
                className="!rounded-button px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={addTask}
                className="!rounded-button bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed bottom-4 right-4 bg-white !rounded-button shadow-lg p-4 animate-fade-in">
          <p className="text-sm text-gray-800">{notification.message}</p>
        </div>
      )}
    </div>
  );
};

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

export default App;

