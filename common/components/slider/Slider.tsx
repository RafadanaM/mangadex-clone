import { ReactNode } from "react";

interface ISlider {
  children?: ReactNode;
}

const Slider = ({ children }: ISlider) => {
  return (
    <div className="w-full overflow-x-scroll flex gap-x-6 flex-nowrap scrollbar-hide">
      {children}
    </div>
  );
};

export default Slider;
