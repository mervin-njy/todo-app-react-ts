// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { toast, todo } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface ListItemProps {
  item: todo;
  ind: number;
  setTodo: React.Dispatch<React.SetStateAction<todo[]>>;
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const ListItem = ({ item, ind, setTodo, setToast }: ListItemProps) => {
  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row justify-between">
      {/* index and title of each list item */}
      <div className="flex flex-row gap-4">
        <p>{ind + 1}</p>
        <p>{item.title}</p>
      </div>

      {/* buttons to mark completion, edit or delete item */}
    </div>
  );
};

export default ListItem;
