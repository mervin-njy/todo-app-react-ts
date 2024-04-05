// import statements -----------------------------------------------------------------------------------------------------------
import "../styles/App.css";
import { useEffect, useState } from "react";

// types -----------------------------------------------------------------------------------------------------------------------
interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  inputField: boolean;
}

function App() {
  // useState ------------------------------------------------------------------------------------------------------------------
  const [todo, setTodo] = useState<todo[]>([]); // [[todoItem, todoItem...] ...]

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
        <main>
          <div>
            {todo?.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
