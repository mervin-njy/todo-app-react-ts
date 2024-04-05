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
  const handlePageItemCount = (change: number) => {
    setFilter({
      ...filter,
      itemsPerPage: filter.itemsPerPage + change,
      page: 1, // reset page to 1 when changing items per page (prevent page number being out of range)
    });
  };

  const handleChangePage = (change: number) => {
    setFilter({ ...filter, page: filter.page + change });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="flex flex-row items-start gap-2 tablet:flex-col">
      {/* Change Items per page (block of 3 items): - Items: <number> + */}
      <div className="join block items-center">
        {/* Display « to decrease page number (page > 1) */}
        {filter.itemsPerPage > 1 && (
          <button
            onClick={() => handlePageItemCount(-1)}
            className="btn join-item btn-sm focus:outline-none"
          >
            -
          </button>
        )}
        {/* Display current page number */}
        <div className="btn join-item btn-sm pointer-events-none">
          Show: {filter.itemsPerPage}
        </div>
        {/* Display » to increase page number (page < totalPages) */}
        {filter.itemsPerPage < 30 && (
          <button
            onClick={() => handlePageItemCount(1)}
            className="btn join-item btn-sm focus:outline-none"
          >
            +
          </button>
        )}
      </div>

      {/* Change Page number (block of 3 items): « Page <number> » */}
      <div className="join block">
        {/* Display « to decrease page number (page > 1) */}
        {filter.page > 1 && (
          <button
            onClick={() => handleChangePage(-1)}
            className="btn join-item btn-sm focus:outline-none"
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
            className="btn join-item btn-sm focus:outline-none"
          >
            »
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
