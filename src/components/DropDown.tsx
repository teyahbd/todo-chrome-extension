import { useState } from "react";
import classNames from "classnames";
import Input from "./Input";
import TaskList from "./TaskList";
type DropdownType = {
  title: string;
  list: { id: string; name: string; checked: boolean }[];
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  setTasks?: any;
};

const DropDown = ({
  title,
  list,
  color = "violet",
  setTasks,
}: DropdownType) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={classNames(
          "inline-flex w-72 justify-center gap-x-1.5 px-3 py-2 border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]",
          { "bg-violet-200 hover:bg-violet-300": color === "violet" },
          { "bg-pink-200 hover:bg-pink-300": color === "pink" },
          { "bg-red-200 hover:bg-red-300": color === "red" },
          { "bg-orange-200 hover:bg-orange-300": color === "orange" },
          { "bg-yellow-200 hover:bg-yellow-300": color === "yellow" },
          { "bg-lime-200 hover:bg-lime-300": color === "lime" },
          { "bg-cyan-200 hover:bg-cyan-300": color === "cyan" },
          { "opacity-50": !open }
        )}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {title}
        <svg
          className="mt-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classNames("w-72 mt-2", {
          hidden: !open,
        })}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <TaskList list={list} setTasks={setTasks} />
        <Input placeholder="I need to..." tasks={list} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default DropDown;
