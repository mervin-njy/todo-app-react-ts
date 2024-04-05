// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface FilterCompletedProps {
  filter: filter; // used keys: completed
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const FilterCompleted = ({ filter, setFilter }: FilterCompletedProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const ToggleStatus = () => {
    setFilter({ ...filter, completed: !filter.completed });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <button
        onClick={ToggleStatus}
        className="btn btn-sm w-40 border-accent focus:outline-none"
      >
        {filter.completed ? "Completed" : "Ongoing"}
      </button>
    </div>
  );
};

export default FilterCompleted;
