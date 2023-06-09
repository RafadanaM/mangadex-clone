import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination } from "swiper";
import { SeasonalManga } from "../../../types/manga.types";
import SeasonalCard from "./SeasonalCard";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import useMediaQuery from "@Common/hooks/useMediaQuery";
import RecentCard from "../recentCards/RecentCard";

interface ISeasonalCards {
  data: SeasonalManga[];
}

const SeasonalCards = ({ data }: ISeasonalCards) => {
  const [isLoading, isSmall] = useMediaQuery("(max-width:640px)");

  return (
    <Swiper
      modules={[Pagination, FreeMode, Mousewheel]}
      mousewheel={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
        horizontalClass: "bullets",
        el: ".seasonal-bullets",
      }}
      freeMode={true}
      spaceBetween={20}
      slidesPerView={"auto"}
    >
      {!isLoading
        ? data.map((manga) => (
            <SwiperSlide key={manga.id} className="w-fit">
              {isSmall ? (
                <RecentCard
                  data={{
                    image: manga.image,
                    language: manga.language,
                    title: manga.title,
                  }}
                />
              ) : (
                <SeasonalCard data={manga} />
              )}
            </SwiperSlide>
          ))
        : null}

      <div className="seasonal-bullets mt-2 hidden sm:block" />
    </Swiper>
  );
};

export default SeasonalCards;
