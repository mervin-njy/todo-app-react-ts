// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter, toast, todo } from "../pages/App";
import ListHeader from "./List/ListHeader";
import ListItem from "./List/ListItem";

// types -----------------------------------------------------------------------------------------------------------------------
interface ListProps {
  todo: todo[];
  setTodo: React.Dispatch<React.SetStateAction<todo[]>>;
  filter: filter;
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const List = ({ todo, setTodo, filter, setToast }: ListProps) => {
  // variables -----------------------------------------------------------------------------------------------------------------
  const startingIndex = (filter.page - 1) * filter.itemsPerPage;
  const filteredItems = todo
    .filter((item) => {
      return (
        //filter items based on completion status and user id first
        item.completed === filter.completed && item.userId === filter.userId
      );
    })
    .filter((_item, ind) => {
      // filter full list of items based on page number
      return ind >= startingIndex && ind < startingIndex + filter.itemsPerPage;
    });

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="mt-4 w-[50rem] rounded-xl tablet:px-10">
      <ListHeader />
      <ul className="flex flex-col">
        {/* map filtered items for display - bg for even indices */}
        {filteredItems.map((item, ind) => (
          <li
            key={ind}
            className={`${ind % 2 !== 0 && "bg-bgSecondary"} rounded-md p-1`}
          >
            <ListItem
              item={item}
              ind={ind}
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
