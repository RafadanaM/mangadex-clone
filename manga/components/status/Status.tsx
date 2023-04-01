import { MangaStatus } from "../../types/manga.types";
import CircleFill from "@Images/icon/circle-fill.svg";

interface IStatus {
  status: MangaStatus;
  className?: string;
}

const Status = ({ status, className = "" }: IStatus) => {
  const color =
    status === "completed"
      ? "fill-status-blue"
      : status === "ongoing"
      ? "fill-status-green"
      : status === "hiatus"
      ? "fill-status-yellow"
      : status === "cancelled"
      ? "fill-status-red"
      : "fill-status-grey";
  return (
    <span className={`px-2 py-0.5 rounded bg-shade-light ${className}`}>
      <CircleFill className={`w-2 h-2 inline-block mr-1.5 ${color}`} />
      <span className="text-xs capitalize">{status}</span>
    </span>
  );
};

export default Status;
