// import statements -----------------------------------------------------------------------------------------------------------
import List from "../components/List";
import Toolbar from "../components/Toolbar";
import Toast from "../components/Toolbar/Toast";
import "../styles/App.css";
import { useEffect, useState } from "react";

// types -----------------------------------------------------------------------------------------------------------------------
export interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  inputField: boolean;
}

export interface filter {
  userId: number;
  totalUsers: number;
  completed: boolean;
  page: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface toast {
  visible: boolean;
  action: string;
  message: string;
}

function App() {
  // useState ------------------------------------------------------------------------------------------------------------------
  const [todo, setTodo] = useState<todo[]>([]); // [[todoItem, todoItem...] ...]
  const [filter, setFilter] = useState<filter>({
    userId: 1,
    totalUsers: 1,
    completed: false,
    page: 1,
    itemsPerPage: 10,
    totalPages: 1,
  });
  const [toast, setToast] = useState<toast>({
    visible: false,
    action: "",
    message: "",
  });

  // useEffect -----------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    // *** on component mount: fetch data from api to fill todo state
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const items: todo[] = data.map((item: any) => {
          // a. update totalUsers in filter state
          item.userId > filter.totalUsers &&
            setFilter({ ...filter, totalUsers: item.userId });
          // b. accumulate todo data
          return {
            userId: item.userId,
            id: item.id,
            title: item.title,
            completed: item.completed,
            inputField: false,
          };
        });

        setTodo(items);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    // for debugging
    console.log("todo: ", todo);
    console.log("filter: ", filter);
    console.log("toast", toast);
  }, [todo, filter, toast]);

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="mb-10 h-screen font-karla">
        {/* Header: App home page title */}
        <header className="mt-10 text-4xl font-semibold tracking-wide tablet:text-5xl">
          Tasks
        </header>

        {/* Main body: container for Toolbar & List display components */}
        <main className="mt-8 flex min-w-80 flex-col justify-center gap-2 tablet:w-[80rem] tablet:flex-row">
          <Toolbar filter={filter} setFilter={setFilter} />

          <List
            todo={todo}
            setTodo={setTodo}
            filter={filter}
            setFilter={setFilter}
            setToast={setToast}
          />
        </main>

        <div className="mt-10 flex min-w-80 flex-row justify-center tablet:w-[80rem]">
          {toast.visible && <Toast toast={toast} setToast={setToast} />}
        </div>
      </div>
    </>
  );
}

export default App;
