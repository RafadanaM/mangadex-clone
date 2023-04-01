import Image from "next/image";
import Link from "next/link";
import Flag from "@Common/components/icons/Flag";
import Section from "@Common/components/layout/Section";
import Slider from "@Common/components/slider/Slider";
import SliderItem from "@Common/components/slider/SliderItem";
import { recentlyAdded } from "../../data/home.data";

const RecentSection = () => {
  return (
    <Section title="Recently Added" href="/recent">
      <Slider>
        {[...recentlyAdded, ...recentlyAdded, ...recentlyAdded].map(
          (manga, idx) => (
            <SliderItem key={idx}>
              <Link href={"/asdad"}>
                <a className="w-32">
                  <div className="relative h-44 w-32 overflow-hidden rounded shadow-md after:content-[''] after:absolute after:bg-gradient-to-b after:from-transparent after:opacity-80 after:via-transparent after:to-black after:w-full after:h-full ">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={manga.image}
                      alt="Recent Manga Cover"
                    />
                    <div className="absolute right-2 bottom-0 z-10">
                      <Flag language={manga.language} width={24} height={24} />
                    </div>
                  </div>
                  <h6 className="text-sm mt-2 line-clamp-2">{manga.title}</h6>
                </a>
              </Link>
            </SliderItem>
          )
        )}
      </Slider>
    </Section>
  );
};

export default RecentSection;
