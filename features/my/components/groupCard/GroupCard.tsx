import BaseCard from "@Common/components/cards/BaseCard";
import Avatar from "@Common/components/icons/Avatar";

const GroupCard = () => {
  return (
    <BaseCard>
      <div
        style={{
          backgroundImage: "url(https://mangadex.org/img/group-banner.png)",
        }}
        className="h-24 bg-center opacity-60 bg-primary"
      />
      <div className="flex items-end -mt-6 px-4">
        <Avatar height={48} width={48} />
        <span className="font-bold text-lg ml-4 leading-[21px]">Comikey</span>
      </div>
      <div className="flex mt-3 px-4 pb-4">
        <div className="flex">
          <Avatar height={24} width={24} />
        </div>
        <div className="ml-auto">
          <span className="inline-block border border-black font-bold uppercase text-[0.625rem] rounded p-1">
            1 Members
          </span>
        </div>
      </div>
    </BaseCard>
  );
};

export default GroupCard;
