// import statements -----------------------------------------------------------------------------------------------------------
import List from "../components/List";
import Toolbar from "../components/Toolbar";
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
  completed: boolean;
  page: number;
}

export interface toast {
  visible: boolean;
  message: string;
}

function App() {
  // useState ------------------------------------------------------------------------------------------------------------------
  const [todo, setTodo] = useState<todo[]>([]); // [[todoItem, todoItem...] ...]
  const [filter, setFilter] = useState<filter>({
    userId: 1,
    completed: false,
    page: 1,
  });
  const [toast, setToast] = useState<toast>({ visible: false, message: "" });

  // useEffect -----------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    // *** on component mount: fetch data from api to fill todo state
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const items: todo[] = data.map((item: any) => ({
          userId: item.userId,
          id: item.id,
          title: item.title,
          completed: item.completed,
          inputField: false,
        }));

        setTodo(items);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="mb-10 font-karla">
        {/* Header: App home page title */}
        <header className="mt-10 text-6xl">To do list</header>

        {/* Main body: container for Toolbar & List display components */}
        <main className="flex flex-row justify-center gap-6">
          <Toolbar
            filter={filter}
            setFilter={setFilter}
            toast={toast}
            setToast={setToast}
          />

          <List todo={todo} setTodo={setTodo} filter={filter} setToast={setToast} />
        </main>
      </div>
    </>
  );
}

export default App;
