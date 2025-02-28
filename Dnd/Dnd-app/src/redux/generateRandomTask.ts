import { Task } from './taskSlice';

const generateRandomTasks = (num: number): Task[] => {
  return Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    title: `Task ${i + 1}`,
    status: 'Todo',
  }));
};

export default generateRandomTasks;
