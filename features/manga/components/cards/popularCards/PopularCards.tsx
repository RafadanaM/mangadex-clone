import { Swiper, SwiperSlide } from "swiper/react";
import { PopularManga } from "../../../types/manga.types";
import { Navigation, Pagination } from "swiper";
import PopularCard from "./PopularCard";
import { useState } from "react";
import ChevronRight from "@Images/icon/chevron-right.svg";
import ChevronLeft from "@Images/icon/chevron-left.svg";
import "swiper/css/navigation";

interface IPopularCards {
  data: PopularManga[];
}

const PopularCards = ({ data }: IPopularCards) => {
  const [slideNumber, setSlideNumber] = useState(1);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".slide-right",
        prevEl: ".slide-left",
      }}
      pagination={{
        type: "fraction",
        el: ".paginate-count",
      }}
      loop
      autoplay
      slidesPerView={1}
      className="relative -mx-4 sm:mx-0"
      onSlideChange={(swiper) => {
        setSlideNumber(swiper.realIndex + 1);
      }}
    >
      {data.map((manga, idx) => (
        <SwiperSlide key={idx} className="w-fit">
          <PopularCard data={manga} />
        </SwiperSlide>
      ))}
      <div
        style={{ color: "#FFFFFF" }}
        className="paginate-count absolute bottom-2.5 right-0 left-0 mx-auto z-10 max-w-[2.75rem] px-2 py-0.5 rounded-full text-white text-xs bg-black opacity-60 sm:hidden"
      />
      <span className="hidden md:inline absolute bottom-[1.125rem] right-32 z-10 text-sm font-semibold">
        NO. {slideNumber}
      </span>
      <div className="absolute bottom-1.5 sm:bottom-2.5 left-4 sm:left-auto right-4 z-10 flex justify-between items-center sm:justify-start gap-2">
        <button className="rounded-full slide-left bg-black bg-opacity-60 sm:bg-transparent sm:bg-opacity-100 p-0 sm:p-1 hover:bg-black hover:bg-opacity-90 sm:hover:bg-shade sm:hover:bg-opacity-20">
          <ChevronLeft className="icon w-7 h-7 text-white sm:text-black p-0.5 sm:p-1" />
        </button>
        <button className="rounded-full slide-right bg-black bg-opacity-60 sm:bg-transparent sm:bg-opacity-100 p-0 sm:p-1 hover:bg-black hover:bg-opacity-90 sm:hover:bg-shade sm:hover:bg-opacity-20">
          <ChevronRight className="icon w-7 h-7 text-white sm:text-black p-0.5 sm:p-1" />
        </button>
      </div>
    </Swiper>
  );
};

export default PopularCards;
