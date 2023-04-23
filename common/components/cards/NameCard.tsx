import Avatar from "../icons/Avatar";
import BaseCard from "./BaseCard";

interface INameCard {
  name: string;
}

const NameCard = ({ name }: INameCard) => {
  return (
    <BaseCard className="p-2 flex items-center">
      <Avatar height={32} width={32} />
      <span className="font-medium ml-2 line-clamp-1">{name}</span>
    </BaseCard>
  );
};

export default NameCard;
