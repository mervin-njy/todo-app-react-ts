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
    <div className="bg-bgSecondary flex flex-row items-start justify-between rounded-xl p-4 tablet:flex-col">
      <div className="flex flex-row items-center gap-2 tablet:flex-col">
        <FilterUser filter={filter} setFilter={setFilter} />
        <FilterCompleted filter={filter} setFilter={setFilter} />
      </div>
      <Pagination filter={filter} setFilter={setFilter} />

      {toast.visible && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
};

export default Toolbar;
