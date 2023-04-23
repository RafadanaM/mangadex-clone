import Avatar from "../icons/Avatar";
import BaseCard from "./BaseCard";

interface INameCard {
  name: string;
  role?: string;
}

const NameCard = ({ name, role }: INameCard) => {
  return (
    <BaseCard className="p-2 flex items-center">
      <Avatar height={32} width={32} />
      <span className="font-medium ml-2 line-clamp-1">{name}</span>
      {role ? (
        <div className="ml-auto text-xs font-medium py-1 px-2 bg-secondary-light">
          {role}
        </div>
      ) : null}
    </BaseCard>
  );
};

export default NameCard;
