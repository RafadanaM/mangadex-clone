import { Swiper, SwiperSlide } from "swiper/react";
import { RecentManga } from "../../../types/manga.types";
import { Pagination, FreeMode, Mousewheel } from "swiper";
import RecentCard from "./RecentCard";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

interface IRecentCards {
  data: RecentManga[];
}

const RecentCards = ({ data }: IRecentCards) => {
  return (
    <Swiper
      modules={[Pagination, FreeMode, Mousewheel]}
      mousewheel={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
        horizontalClass: "bullets",
        el: ".recent-bullets",
      }}
      freeMode={true}
      spaceBetween={10}
      slidesPerView={"auto"}
    >
      {data.map((manga, idx) => (
        <SwiperSlide key={idx} className="w-fit">
          <RecentCard data={manga} />
        </SwiperSlide>
      ))}

      <div className="recent-bullets mt-2 mx-auto" />
    </Swiper>
  );
};

export default RecentCards;
