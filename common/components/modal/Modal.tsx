import { ReactNode } from "react";

interface IModal {
  open: boolean;
  updateOpen: (newState: boolean) => void;
  children: ReactNode;
}

const Modal = ({ open, updateOpen, children }: IModal) => {
  return (
    <div
      onClick={() => updateOpen(false)}
      tabIndex={-1}
      className={`fixed z-50 left-0 top-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm
      ${open ? "flex justify-center items-center" : "hidden"}`}
    >
      <div
        className={`overflow-hidden w-3/4 h-12 bg-white ${
          open ? "block animate-blow-up" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
