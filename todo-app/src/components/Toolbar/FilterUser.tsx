// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface FilterUserProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const FilterUser = ({ filter, setFilter }: FilterUserProps) => {
  // functions -----------------------------------------------------------------------------------------------------------------
  const getUserOptions = () => {
    // fill array of option element based on count of totalUsers
    const options: JSX.Element[] = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option
          key={i}
          value={i}
          className={`${i === filter.userId ? "bg-accent" : "bg-neutral"} hover:bg-accent`}
        >
          User {i}
        </option>,
      );
    }

    return options;
  };
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleFilterUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      userId: parseInt(event.target.value), // ensure that integer is passed
    }));
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <select
        defaultValue={filter.userId}
        onChange={handleFilterUser}
        className="focus:border-bgSecondary select select-ghost select-accent select-sm w-40"
      >
        {getUserOptions()}
      </select>
    </div>
  );
};

export default FilterUser;
