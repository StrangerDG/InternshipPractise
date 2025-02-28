import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, RootState, AppDispatch} from "./store/store";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch: AppDispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo({ id: Date.now(), title: input }));
      setInput("");
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((todo: { id: any; }) => todo.id === active.id);
      const newIndex = todos.findIndex((todo: { id: any; }) => todo.id === over.id);
      dispatch(setTodos(arrayMove(todos, oldIndex, newIndex)));
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>
          Add
        </button>
      </div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={todos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={() => dispatch(removeTodo(todo.id))} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

function setTodos(_arg0: { id: number; title: string; }[]): any {
  throw new Error("Function not implemented.");
}
