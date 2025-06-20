import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";

// Mock chrome.storage for local dev
const isChromeExt = typeof chrome !== "undefined" && chrome.storage;
const storage = isChromeExt
  ? chrome.storage.local
  : {
      get: (keys: string[], cb: (result: any) => void) => {
        const data = localStorage.getItem(keys[0]);
        cb({ [keys[0]]: data ? JSON.parse(data) : [] });
      },
      set: (obj: any) => {
        const key = Object.keys(obj)[0];
        localStorage.setItem(key, JSON.stringify(obj[key]));
      },
    };

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    storage.get(["myTasks"], (result) => {
      console.log("Getting tasks from storage:", result.myTasks);
      if (result.myTasks) {
        setTasks(result.myTasks);
      }
    });
  }, []);

  useEffect(() => {
    storage.set({ myTasks: tasks });
  }, [tasks]);

  return (
    <DropDown
      title={`You've got ${tasks.length} thing${
        tasks.length !== 1 ? "s" : ""
      } to do`}
      list={tasks}
      setTasks={setTasks}
    />
  );
}

export default App;
