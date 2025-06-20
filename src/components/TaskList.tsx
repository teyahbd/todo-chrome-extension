import ListItem from "./ListItem";

type TaskListProps = {
  list: { id: string; name: string; checked: boolean }[];
  setTasks?: any;
};

const TaskList = ({ list, setTasks }: TaskListProps) => {
  const colorOptions = [
    // "red",
    // "yellow",
    "pink",
    "lime",
    "orange",
    // "violet",
    "cyan",
  ];

  const sortedList = [...list].sort(
    (a, b) => Number(a.checked) - Number(b.checked)
  );

  return (
    <div className="space-y-2">
      {sortedList.map((item: any, index: any) => {
        const itemColor = colorOptions[index % colorOptions.length];
        return (
          <ListItem
            itemColor={itemColor}
            index={index}
            item={item}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
