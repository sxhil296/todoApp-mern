import React from "react";
import { Delete, Edit, CheckSquare } from "react-feather";

const TodoContainer = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="list-none min-w-[25%]">
        <div className="m-2 bg-white text-black text-2xl flex justify-between items-center">
          <li className="flex-1 m-1">reactjs</li>
          <div className="flex">
            <button className="bg-[#fda085] text-white border-none p-4 cursor-pointer text-base hover:bg-white hover:text-[#fda085]">
              <Delete />
            </button>
            <button className="bg-[#fda085] text-white border-none p-4 cursor-pointer text-base hover:bg-white hover:text-[#fda085]">
              <Edit />
            </button>
            <button className="bg-[#fda085] text-white border-none p-4 cursor-pointer text-base hover:bg-white hover:text-[#fda085]">
              <CheckSquare />
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default TodoContainer;
