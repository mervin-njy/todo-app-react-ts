// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface FilterCompletedProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const FilterCompleted = ({ filter, setFilter }: FilterCompletedProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleFilterComplete = () => {
    setFilter({ ...filter, completed: !filter.completed });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <button onClick={handleFilterComplete}>{filter.completed? "Ongoing" : "Completed"}</button>
    </div>
  );
};

export default FilterCompleted;
