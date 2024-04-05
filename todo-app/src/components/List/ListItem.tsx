// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { toast, todo } from "../../pages/App";
import { MdModeEdit, MdDelete } from "react-icons/md";

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
        <p className="w-10 text-right">{ind + 1}</p>
        <p className="w-[35rem] text-left">{item.title}</p>
      </div>

      {/* buttons to mark completion, edit or delete item */}
      <div className="flex w-36 flex-row items-center justify-end gap-3 pr-2">
        <input type="checkbox"></input>
        <MdModeEdit className="text-info" />
        <MdDelete className="text-error" />
      </div>
    </div>
  );
};

export default ListItem;
