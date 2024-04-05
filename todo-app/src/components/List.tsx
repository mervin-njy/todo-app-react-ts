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
  const itemsPerPage = 10;
  const startingIndex = (filter.page - 1) * itemsPerPage;
  const filteredItems = todo.filter((item, ind) => {
    return item.completed === filter.completed && item.userId === filter.userId && ind >= startingIndex && ind < startingIndex + itemsPerPage;
  });

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <ListHeader />
      <div className="flex flex-col gap-4">
        {filteredItems.map((item, ind) => (
            <ListItem item={item} ind={ind} setTodo={setTodo} setToast={setToast} />
        ))}
      </div>
    </div>
  );
};

export default List;
