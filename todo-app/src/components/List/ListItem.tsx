// import statements -----------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { filter, toast, todo } from "../../pages/App";
import { MdModeEdit, MdDelete, MdCheck, MdClose } from "react-icons/md";

// types -----------------------------------------------------------------------------------------------------------------------
interface ListItemProps {
  item: todo; // used keys: title, completed
  ind: number;
  filter: filter; // used keys: itemsPerPage, page
  setTodo: React.Dispatch<React.SetStateAction<todo[]>>;
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const ListItem = ({ item, ind, filter, setTodo, setToast }: ListItemProps) => {
  // useState ------------------------------------------------------------------------------------------------------------------
  //   const [updateSuccess, setUpdateSuccess] = useState<boolean>(false); // render success by changing font of title
  const [updatedTask, setUpdatedTask] = useState<string>(""); // updated task to amend in todo state

  // event handler -------------------------------------------------------------------------------------------------------------
  const handleToggleComplete = () => {
    // toggle completion status of item
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === item.id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem,
      ),
    );
    // show toast message
    setToast({
      visible: true,
      action: "Task Status",
      message: `User ${item.userId}: ${item.title} - ${item.completed ? "is still ongoing..." : "completed!"}`,
    });
  };

  const handleEdit = () => {
    // toggle item's inputField for editing
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === item.id
          ? { ...todoItem, inputField: !todoItem.inputField }
          : todoItem,
      ),
    );
    // set updated task value
    setUpdatedTask(item.title);
  };

  const handleConfirmChange = () => {
    // confirm item's title change
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === item.id
          ? { ...todoItem, title: updatedTask, inputField: false }
          : todoItem,
      ),
    );
    // show toast message
    setToast({
      visible: true,
      action: "Update",
      message: `User ${item.userId}: ${item.title}!`,
    });
  };

  const handleDelete = () => {
    // remove item from todo state
    setTodo((prevTodo) =>
      prevTodo.filter((todoItem) => todoItem.id !== item.id),
    );
    // show toast message
    setToast({
      visible: true,
      action: "Delete",
      message: `User ${item.userId}: ${item.title}!`,
    });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row justify-between">
      {/* 1. Display index and title of each list item / inputField for editing */}
      <div
        className={`${item.completed && "font-extralight"} flex flex-row items-center gap-4`}
      >
        {/* listItem Index (based on filtered userId and completion status) */}
        <p className="w-10 text-right">
          {filter.itemsPerPage * (filter.page - 1) + ind + 1}
        </p>
        {/* a. display current items */}
        {!item.inputField && (
          <p className="input-sm w-[35rem] text-left">{item.title}</p>
        )}
        {/* b. inputField for editing */}
        {item.inputField && (
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            className="input input-sm input-bordered input-info input-ghost w-[35rem]"
          />
        )}
      </div>

      {/* 2. UI to mark completion, edit or delete item / confirm, cancel edit mode */}

      {/* a. non-edit mode buttons */}
      {!item.inputField && (
        <div className="flex w-36 flex-row items-center justify-end gap-3 pr-1">
          {/* i. checkbox for changing completion status */}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={handleToggleComplete}
            className={`${!item.completed && "hover:bg-warning"} checkbox-warning checkbox checkbox-xs hover:opacity-70`}
          />
          {/* ii. button to toggle inputField for editing */}
          <MdModeEdit
            onClick={handleEdit}
            className="cursor-pointer text-info hover:opacity-70"
          />
          {/* iii. button to delete item */}
          <MdDelete
            onClick={handleDelete}
            className="cursor-pointer text-error hover:opacity-70"
          />
        </div>
      )}

      {/* b. edit mode buttons */}
      {item.inputField && (
        <div className="flex w-36 flex-row items-center justify-end gap-3 pr-1">
          {/* i. confirm edit button */}
          <MdCheck
            onClick={handleConfirmChange}
            size={18}
            className="cursor-pointer text-success"
          />
          {/* ii. cancel edit button */}
          <MdClose
            onClick={handleEdit}
            size={18}
            className="cursor-pointer text-error"
          />
        </div>
      )}
    </div>
  );
};

export default ListItem;
