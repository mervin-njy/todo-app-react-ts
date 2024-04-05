// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface PaginationProps {
  filter: filter;
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const Pagination = ({ filter, setFilter }: PaginationProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleFilterPage = () => {
    setFilter({ ...filter, page: filter.page + 1 });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <button onClick={handleFilterPage}>{filter.page}</button>
    </div>
  );
};

export default Pagination;
