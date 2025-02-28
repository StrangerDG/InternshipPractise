
// import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Todo = {
  id: number;
  title: string;
};

type Props = {
  todo: Todo;
  onDelete: () => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-gray-100 p-3 flex justify-between items-center border mb-2 rounded cursor-grab"
    >
      <span>{todo.title}</span>
      <button className="text-red-500" onClick={onDelete}>
        ❌
      </button>
    </div>
  );
}
function useSortable(_arg0: { id: number; }): { attributes: any; listeners: any; setNodeRef: any; transform: any; transition: any; } {
    throw new Error("Function not implemented.");
}

