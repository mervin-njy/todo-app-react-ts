// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
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

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="mt-4 w-[50rem] rounded-xl tablet:px-10">
      <ListHeader />
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
    </div>
  );
};

export default List;
