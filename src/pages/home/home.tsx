import { PlusIcon } from "@heroicons/react/24/solid";
import { ITodoItem } from "core/interfaces";
import { FormEvent, useState } from "react";
import { TodoItem } from "shared/ui";

export interface HomeProps {}

let nextId = 1;

export function Home(props: HomeProps) {
  const [todo, setTodo]: Array<any> = useState([]);
  const [inputValue, setInputValue]: any = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodo([...todo, { id: nextId++, description: inputValue }]);
    setInputValue("");
  };
  const handleEdit = (todoItemDescription: string, id: number) => {
    let newTodo = todo.map((item: ITodoItem) => {
      if (item?.id === id) {
        item.description = todoItemDescription;
        return item;
      } else {
        return item;
      }
    });
    setTodo(newTodo);
  };

  const handleDelete = (id: number) => {
    setTodo(todo.filter((item: ITodoItem) => item?.id !== id));
  };

  return (
    <>
      <div className="-mt-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between gap-3">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  maxLength={300}
                  type="text"
                  name="todo-item"
                  placeholder="Enter Todo Item"
                  id="todo-item"
                  autoComplete="given-name"
                  className="h-16 px-4 block w-full rounded-md bg-gray-800 border border-gray-600 shadow-sm text-white focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue}
                  className="flex items-center whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-white font-normal py-4 px-4 rounded disabled:cursor-not-allowed disabled:bg-blue-300 disabled:cursor-disabled"
                >
                  <PlusIcon className="h-4 w-4 text-gray-300 cursor-pointer" />
                  Add Item
                </button>
              </div>
            </form>
          </div>

          <div className="col-span-12">
            <div className="flex justify-between">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-violet-500"
              >
                Total Items
                <span className="rounded-full bg-gray-500 px-2.5 py-1 text-xs text-white font-bold mx-2">
                  {todo?.length}
                </span>
              </label>
            </div>
          </div>

          {todo.map((item: any, index: number) => (
            <div className="col-span-12" key={index}>
              <TodoItem
                item={item}
                id={item?.id}
                onSaveClicked={handleEdit}
                onDeleteClicked={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
