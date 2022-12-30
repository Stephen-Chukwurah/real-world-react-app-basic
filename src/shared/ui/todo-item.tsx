import {
  PencilSquareIcon,
  CheckIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { ITodoItem } from "core/interfaces";
import { useState } from "react";

export interface TodoItemProps {
  item: ITodoItem;
  id: number;
  onSaveClicked: any;
  onDeleteClicked: any;
}

export function TodoItem(props: TodoItemProps) {
  const { item, id, onSaveClicked, onDeleteClicked } = props;
  const [inputValue, setInputValue] = useState(item?.description);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };
  const handleSave = () => {
    onSaveClicked(inputValue, id);
    setIsEditMode(false);
  };

  const handleDelete = () => {
    onDeleteClicked(id);
  };

  return (
    <>
      <div className="shadow-md rounded-md bg-gray-500 border border-gray-600 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full">
            <div className="text-white w-full">
              {isEditMode ? (
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  name="todo-item"
                  placeholder="Enter Todo Item"
                  id="todo-item"
                  autoComplete="given-name"
                  className="h-6 px-4 block w-11/12 rounded-md bg-gray-800 border border-gray-600 shadow-sm text-white focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                />
              ) : (
                <>{item?.description}</>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {isEditMode ? (
              <CheckIcon
                className="h-4 w-4 text-gray-300 cursor-pointer"
                onClick={handleSave}
              />
            ) : (
              <PencilSquareIcon
                className="h-4 w-4 text-gray-300 cursor-pointer"
                onClick={handleEdit}
              />
            )}

            <TrashIcon
              className="h-4 w-4 text-gray-300 cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
