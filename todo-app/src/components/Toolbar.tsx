// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../pages/App";
import FilterUser from "./Toolbar/FilterUser";
import FilterCompleted from "./Toolbar/FilterCompleted";
import Pagination from "./Toolbar/Pagination";

// types -----------------------------------------------------------------------------------------------------------------------
interface ToolbarProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const Toolbar = ({ filter, setFilter }: ToolbarProps) => {
  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row items-start justify-between rounded-xl bg-bgSecondary p-4 tablet:min-h-80 tablet:flex-col">
      <div className="flex flex-row items-center gap-2 tablet:flex-col">
        <FilterUser filter={filter} setFilter={setFilter} />
        <FilterCompleted filter={filter} setFilter={setFilter} />
      </div>

      <Pagination filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Toolbar;
