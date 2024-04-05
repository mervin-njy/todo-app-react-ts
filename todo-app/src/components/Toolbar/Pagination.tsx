// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { filter } from "../../pages/App";

// types -----------------------------------------------------------------------------------------------------------------------
interface PaginationProps {
  filter: filter; // used keys: page, itemsPerPage, totalPages
  setFilter: React.Dispatch<React.SetStateAction<filter>>;
}

const Pagination = ({ filter, setFilter }: PaginationProps) => {
  // variables -----------------------------------------------------------------------------------------------------------------

  // event handler -------------------------------------------------------------------------------------------------------------
  const handleChangePage = (change: number) => {
    setFilter({ ...filter, page: filter.page + change });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row items-center">
      {/* Change Items per page: Items: <number> */}

      {/* Change Page number: Page <number> */}
      <div className="join block">
        {/* Display « to decrease page number (page > 1) */}
        {filter.page > 1 && (
          <button
            onClick={() => handleChangePage(-1)}
            className="btn join-item btn-sm"
          >
            «
          </button>
        )}
        {/* Display current page number */}
        <div className="btn join-item btn-sm pointer-events-none">
          Page {filter.page}
        </div>
        {/* Display » to increase page number (page < totalPages) */}
        {filter.page < filter.totalPages && (
          <button
            onClick={() => handleChangePage(1)}
            className="btn join-item btn-sm"
          >
            »
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
