import Image from "next/future/image";

interface IAvatar {
  width?: string | number;
  height?: string | number;
  fill?: boolean;
  className?: string;
}

const Avatar = ({ width, height, fill, className }: IAvatar) => {
  return (
    <Image
      src="https://mangadex.org/img/avatar.png"
      alt="user avatar"
      width={width}
      height={height}
      fill={fill}
      className={`rounded-full z-10 ${className}`}
    />
  );
};

export default Avatar;
