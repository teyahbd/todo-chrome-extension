import classNames from "classnames";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

type ListItemProps = {
  itemColor: string;
  //   itemColor?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  index: number;
  item: { id: string; name: string; checked: boolean };
  setTasks?: any;
};

const ListItem = ({ itemColor, index, item, setTasks }: ListItemProps) => {
  const handleCheck = (checked: boolean) => {
    setTasks((prevTasks: any) =>
      prevTasks.map((task: any) =>
        task.id === item.id ? { ...task, checked } : task
      )
    );
  };

  return (
    <div
      className={classNames(
        "group block px-4 py-2 text-sm border-black border-2 hover:font-medium focus:outline-none hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] flex justify-between items-center bg-white",
        { "hover:bg-violet-200": itemColor === "violet" },
        { "hover:bg-pink-200": itemColor === "pink" },
        { "hover:bg-red-200": itemColor === "red" },
        { "hover:bg-orange-200": itemColor === "orange" },
        { "hover:bg-yellow-200": itemColor === "yellow" },
        { "hover:bg-yellow-200": itemColor === "yellow" },
        { "hover:bg-lime-200": itemColor === "lime" },
        { "hover:bg-cyan-200": itemColor === "cyan" },
        { "opacity-50 grayscale": item.checked }
      )}
      role="menuitem"
      id={`menu-item-${index}`}
      key={index}
    >
      <div className={"flex flex-1 min-w-0"}>
        <Checkbox checked={item.checked} setChecked={handleCheck} />
        <p
          className={classNames(
            `max-w-xs mx-2 truncate h-5 transition-all duration-200 ease-in-out
     group-hover:whitespace-normal group-hover:h-auto group-hover:truncate-0`,
            { "line-through text-gray-400": item.checked }
          )}
        >
          {item.name}
        </p>
      </div>
      <DeleteButton setTasks={setTasks} taskId={item.id} />
    </div>
  );
};

export default ListItem;
