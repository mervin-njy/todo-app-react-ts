// import statements -----------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { filter, toast, todo } from "../pages/App";
import ListHeader from "./List/ListHeader";
import ListItem from "./List/ListItem";

// types -----------------------------------------------------------------------------------------------------------------------
interface ListProps {
  todo: todo[]; // used keys: userId, completed
  setTodo: React.Dispatch<React.SetStateAction<todo[]>>;
  filter: filter; // used keys: userId, completed, page, itemsPerPage, totalPages
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const List = ({ todo, setTodo, filter, setFilter, setToast }: ListProps) => {
  // variables -----------------------------------------------------------------------------------------------------------------
  // 1. get starting index of items to display
  const startingIndex = (filter.page - 1) * filter.itemsPerPage;

  // 2. filter items based on completion status and user id
  const filteredItems = todo.filter((item) => {
    return item.completed === filter.completed && item.userId === filter.userId;
  });

  // 3. calculate total number of pages based on items per page
  const totalPages = Math.ceil(filteredItems.length / filter.itemsPerPage);

  // 4. update total pages in filter state
  totalPages !== filter.totalPages &&
    setFilter({ ...filter, totalPages: totalPages });

  // 5. update filtered items based on starting index and items per page
  const pageItems = filteredItems.slice(
    startingIndex,
    startingIndex + filter.itemsPerPage,
  );

  // useState ------------------------------------------------------------------------------------------------------------------
  const [showField, setShowField] = useState<boolean>(false); // show input field for new task
  const [newTask, setNewTask] = useState<string>(""); // new task to add to todo state

  // event handler -------------------------------------------------------------------------------------------------------------
  const handleShowField = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    setShowField(!showField);
  };

  const handleAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    const todoIndex = todo[todo.length - 1].id + 1; // add new index based on last item's id

    // reset input field and add new task to todo state
    setShowField(false);
    setTodo((prevTodo) => {
      return [
        ...prevTodo,
        {
          userId: filter.userId,
          id: todoIndex,
          title: newTask,
          completed: false,
          inputField: false,
        },
      ];
    });
    // show toast message
    setToast({
      visible: true,
      action: "Add",
      message: `user ${filter.userId}: ${newTask}`,
    });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="mt-4 w-[50rem] rounded-xl tablet:px-10">
      {/* Heading for List items */}
      <ListHeader />

      {/* Container for mapped listItems for display */}
      <ul className="flex flex-col">
        {/* map filtered items for display - change bg for odd indices */}
        {pageItems.map((item, ind) => (
          <li
            key={ind}
            className={`${ind % 2 === 0 && "bg-bgSecondary"} rounded-md p-1`}
          >
            <ListItem
              item={item}
              ind={ind}
              filter={filter}
              setTodo={setTodo}
              setToast={setToast}
            />
          </li>
        ))}
      </ul>

      {/* Button to add new task / field to add task */}
      {!filter.completed && !showField && (
        <div className="flex flex-row justify-end">
          <button
            onClick={handleShowField}
            className="btn btn-success btn-sm mt-4"
          >
            Add Task
          </button>
        </div>
      )}

      {!filter.completed && showField && (
        <form className="flex flex-row justify-end gap-2">
          <input
            type="text"
            placeholder="Enter new task..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            className="input input-sm input-accent mt-4 w-[31rem]"
          ></input>
          <button
            onClick={handleAddTask}
            className="btn btn-success btn-sm mt-4 w-20"
          >
            Confirm
          </button>
          <button
            onClick={handleShowField}
            className="btn btn-error btn-sm mt-4 w-20"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default List;
