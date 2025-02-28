import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Todo type
type Todo = {
    id: number;
    title: string;
};

// Define the initial state with explicit typing
type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};

// Create the slice
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state: { todos: any[]; }, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state: { todos: any[]; }, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo: { id: any; }) => todo.id !== action.payload);
        },
    },
});

// Export the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer
export const todoReducer = todoSlice.reducer;

// Configure the store
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;