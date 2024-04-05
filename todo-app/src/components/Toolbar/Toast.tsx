// import statements -----------------------------------------------------------------------------------------------------------
import React from "react";
import { toast } from "../../pages/App";
import { IoCloseSharp } from "react-icons/io5";

// types -----------------------------------------------------------------------------------------------------------------------
interface ToastProps {
  toast: toast; // used keys: message, visible
  setToast: React.Dispatch<React.SetStateAction<toast>>;
}

const Toast = ({ toast, setToast }: ToastProps) => {
  // event handler -------------------------------------------------------------------------------------------------------------
  const handleCloseToast = () => {
    setToast({ ...toast, visible: false });
  };

  // render component ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div className="fixed bottom-0 right-0 bg-gray-800 p-4 text-white">
        <button className="float-right" onClick={handleCloseToast}>
          {/* TODO: close automatically after n seconds */}
          <IoCloseSharp size={15} />
        </button>
        <p>{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
