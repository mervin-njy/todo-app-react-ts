// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { toast } from "../../pages/App";
import { IoCloseSharp } from "react-icons/io5";

// types -----------------------------------------------------------------------------------------------------------------------
interface ToastProps {
  toast: toast; // used keys: message, action, visible
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const Toast = ({ toast, setToast }: ToastProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleCloseToast = () => {
    setToast({ ...toast, visible: false });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div className="hover:bg-bgSecondary fixed right-8 flex w-96 flex-row items-start justify-between rounded-xl border-2 border-accent p-4 text-white tablet:right-20 tablet:top-10">
      <div className="flex flex-col items-start gap-2 pl-4">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-lg font-bold">Action</h3>
          <div
            className={`badge ${toast.action === "Add" && "badge-success"} ${toast.action === "Task Status" && "badge-warning"} ${toast.action === "Update" && "badge-info"} ${toast.action === "Delete" && "badge-error"}`}
          >
            {toast.action}
          </div>
        </div>

        <p className="text-left text-sm">{toast.message}</p>
      </div>

      {/* TODO: close automatically after n seconds */}
      <IoCloseSharp
        onClick={handleCloseToast}
        size={20}
        className="cursor-pointer text-accent"
      />
    </div>
  );
};

export default Toast;
