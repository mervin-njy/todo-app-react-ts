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
      <button onClick={handleFilterUser}>{filter.userId}</button>
    </div>
  );
};

export default FilterUser;
