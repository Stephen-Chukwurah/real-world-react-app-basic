import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export interface HomeProps {}

export function Home(props: HomeProps) {
  const [todo, setTodo]: any = useState([]);
  const [inputValue, setInputValue]: any = useState("");
  const handleAddItem = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };
  return (
    <>
      <div className="-mt-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="flex gap-3">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                name="todo-item"
                placeholder="Enter Todo Item"
                id="todo-item"
                autoComplete="given-name"
                className="h-16 px-4 block w-full rounded-md bg-gray-800 border border-gray-600 shadow-sm text-white focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
              />

              <button
                onClick={handleAddItem}
                disabled={!inputValue}
                className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-normal py-4 px-4 rounded disabled:bg-blue-300 disabled:cursor-disabled"
              >
                <PlusIcon className="h-4 w-4 text-gray-300 cursor-pointer" />
                Add
              </button>
            </div>
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
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-sky-500"
              >
                Selected
                <span className="rounded-full bg-gray-500 px-2.5 py-1 text-xs text-white font-bold mx-2">
                  5 of {todo?.length}
                </span>
              </label>
            </div>
          </div>

          {todo.map((item: string, index: number) => (
            <div className="col-span-12" key={index}>
              <div className="shadow-md rounded-md bg-gray-500 border border-gray-600 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mx-4">
                      <input type="checkbox" />
                    </div>
                    <div className="text-white">{item}</div>
                  </div>
                  <div className="">
                    <TrashIcon className="h-4 w-4 text-gray-300 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
