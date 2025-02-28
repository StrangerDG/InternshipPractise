import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Task {
  id: number;
  title: string;
  status: 'Todo' | 'In Progress' | 'Completed';
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: number; status: Task['status'] }>) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.status = status;
    },
  },
});

export const { setTasks, updateTaskStatus } = taskSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.tasks;

export default taskSlice.reducer;
