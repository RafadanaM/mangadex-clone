import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div>
      <div
        className={`${styles.bannerContainer} bg-cover bg-no-repeat`}
        style={{
          backgroundImage:
            "url(https://mangadex.org/covers/87716042-b3fe-4885-ae8d-f2aa2c47affb/6ba0d555-f071-4ef6-9db6-ff8137821c76.jpg.256.jpg)",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0, 0.5) ,transparent)",
          }}
          className="absolute top-0 left-0 right-0 bottom-0 h-auto w-auto backdrop-blur-md"
        />
      </div>
    </div>
  );
};

export default Banner;
