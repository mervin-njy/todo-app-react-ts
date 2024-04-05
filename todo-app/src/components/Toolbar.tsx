// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter, toast } from "../pages/App";
import FilterUser from "./Toolbar/FilterUser";
import FilterCompleted from "./Toolbar/FilterCompleted";
import Pagination from "./Toolbar/Pagination";
import Toast from "./Toolbar/Toast";

// types -----------------------------------------------------------------------------------------------------------------------
interface ToolbarProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
  toast: toast;
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const Toolbar = ({ filter, setFilter, toast, setToast }: ToolbarProps) => {
  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-col justify-start gap-4">
      <FilterUser filter={filter} setFilter={setFilter} />
      <FilterCompleted filter={filter} setFilter={setFilter} />
      <Pagination filter={filter} setFilter={setFilter} />

      <Toast toast={toast} setToast={setToast} />
    </div>
  );
};

export default Toolbar;
