import Image from "next/future/image";
import styles from "./manga-detail.module.css";
import Container from "@Common/components/layout/Container";
import Actions from "@MangaDetail/components/actions/Actions";
import Tags from "@MangaDetail/components/tags/Tags";
import Stats from "@Manga/components/stats/Stats";
import Banner from "@MangaDetail/components/banner/Banner";

const MangaDetail = () => {
  return (
    <Container fullWidth>
      <div className={`${styles.detailLayout} ${styles.detailArea} px-4 mt-2`}>
        <Banner />
        <div className={`${styles.cover} aspect-[4/6]`}>
          <Image
            src="https://mangadex.org/covers/10b8bb96-3b6a-4edc-a428-ddd3e88c3a63/674818e2-fcd5-41dd-a1a7-1d75f5f0c06f.png.512.jpg"
            alt="cover"
            fill
            className="cover rounded shadow-lg"
          />
        </div>
        <div
          className={`${styles.info} relative flex flex-col justify-end pb-1 text-white h-banner`}
        >
          <h1 className="text-6xl font-bold mb-1 line-clamp-2">Title</h1>
          <h2 className="text-xl line-clamp-2 inline-block">Alt Title</h2>
          <span className="mt-auto line-clamp-1">Author</span>
        </div>
        <div className={styles.actions}>
          <Actions />
        </div>
        <div className={`${styles.tags}`}>
          <Tags
            tags={["comedy", "web comic", "romance", "sci-fi"]}
            status="ongoing"
          />
        </div>
        <div className={`${styles.stats}`}>
          <Stats
            type="detail"
            stats={{ comments: 12, views: -1, followers: 9898, rating: 8.39 }}
          />
        </div>
        <div className={`${styles.description} text-sm mt-4`}>
          <p>
            {`Gin no Spoon manga's story centers around Ritsu, a high school boy who, along with his younger brother Shirabe and sister Kanade, were raised by their single mother Kyoko. When their mother is hospitalized due to sickness, Ritsu begins to take care of his younger siblings and cook food for them, slowly entering the world of cooking. Things become more complicated when Ritsu finds out a shocking fact: that he is an adopted child.`}
          </p>
        </div>
        <div className={`${styles.content}`}></div>
      </div>
    </Container>
  );
};

export default MangaDetail;
