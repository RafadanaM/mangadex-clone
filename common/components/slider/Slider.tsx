import { ReactNode, useRef, MouseEvent } from "react";

interface ISlider {
  children?: ReactNode;
}

const Slider = ({ children }: ISlider) => {
  // const [isDown, setIsDown] = useState<boolean>(false);
  // const isDown = useRef<boolean>(false);
  // const isDragged = useRef<boolean>(false);
  // const startX = useRef<number>(0);
  // const scrollLeft = useRef<number>(0);

  // const sliderRef = useRef<HTMLDivElement | null>(null);
  // function handleMouseDown(e: MouseEvent<HTMLDivElement>) {
  //   e.preventDefault();
  //   if (sliderRef.current) {
  //     isDown.current = true;
  //     startX.current = e.pageX;
  //     scrollLeft.current = sliderRef.current.scrollLeft;
  //     // sliderRef.current.scrollLeft = -150;
  //   }
  // }

  // function handleMouseUp() {
  //   isDown.current = false;
  // }

  // function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
  //   e.preventDefault();
  //   if (!isDown.current) return;
  //   isDragged.current = true;
  //   if (sliderRef.current) {
  //     const x = e.pageX;
  //     const scroll = x - startX.current;
  //     console.log({
  //       startX: startX.current,
  //       x,
  //       clientX: e.clientX,
  //       scroll,
  //       scrollLeft: scrollLeft.current,
  //     });

  //     sliderRef.current.scrollLeft = scrollLeft.current - scroll;
  //   }
  // }

  // console.log("run");

  return (
    <div
      // ref={sliderRef}
      // onMouseMove={handleMouseMove}
      // onMouseDown={handleMouseDown}
      // onMouseUp={handleMouseUp}
      className="w-full overflow-x-auto -my-2 py-2 flex gap-x-6 flex-nowrap scrollbar-hide"
    >
      {children}
    </div>
  );
};

export default Slider;
