import React, { ReactNode } from "react";
interface ISliderItem {
  children?: ReactNode;
  className?: string;
}

const SliderItem = ({ children, className }: ISliderItem) => {
  return (
    <div
      className={`flex flex-col flex-shrink-0 flex-grow-0 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default SliderItem;
