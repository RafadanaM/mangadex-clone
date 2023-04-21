import BaseCard from "@Common/components/cards/BaseCard";
import Image from "next/future/image";
import Link from "next/link";
import MoreButton from "../buttons/moreButton/MoreButton";
import Avatar from "@Common/components/icons/Avatar";

const MDListsCard = () => {
  return (
    <BaseCard className="p-4" overflowHidden={false}>
      <div className="flex items justify-between">
        <span className="text-lg font-bold">Title</span>
        <MoreButton />
      </div>

      <div className="flex items-center">
        <Avatar width={16} height={16} className="mr-2" />
        <span className="text-sm">Username</span>
      </div>
      <div className="flex flex-nowrap gap-2 mt-4 overflow-auto">
        {new Array(20).fill(0).map((_, idx) => (
          <Link key={idx} href="titles/1" passHref>
            <a className="rounded-sm overflow-visible flex-shrink-0 shadow-main">
              <Image
                alt="cover"
                src={
                  "https://mangadex.org/covers/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b/f6cd8dcd-ad53-47bc-9699-fb758c51d9ba.jpg.256.jpg"
                }
                height={104}
                width={72}
                style={{ height: "104px", width: "72px" }}
              />
            </a>
          </Link>
        ))}
      </div>
    </BaseCard>
  );
};

export default MDListsCard;
