// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface FilterUserProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const FilterUser = ({ filter, setFilter }: FilterUserProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleFilterUser = () => {
    setFilter({ ...filter, userId: filter.userId + 1 });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <select defaultValue={filter.userId} onChange={handleFilterUser} className="select select-ghost">
        {filter.userId}
      </select>
    </div>
  );
};

export default FilterUser;
