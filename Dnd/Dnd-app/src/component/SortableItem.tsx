import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../redux/taskSlice';

interface SortableItemProps {
  task: Task;
}

export const SortableItem: React.FC<SortableItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-white p-3 my-2 rounded-lg shadow-md cursor-pointer">
      {task.title}
    </div>
  );
};
