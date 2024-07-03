import React from "react";
import { Plus } from "react-feather";

const TodoForm = () => {
  return (
    <div className="min-h-[20vh] flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-2">Emir's Todo List</h1>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Add a todo"
          className="h-12 p-2 text-2xl border-none bg-white outline-none"
        />
        <button className="h-12 p-2 text-2xl border-none bg-white outline-none text-[#fda085] cursor-pointer hover:bg-[#fda085] hover:text-white">
          <Plus />
        </button>

        {/* filter */}
        <div className="m-4 relative">
          <select
            name="todos"
            className="h-12 p-2 text-[#fda085] font-poppins cursor-pointer outline-none bg-white hover:bg-[#fda085] hover:text-white text-xl"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
