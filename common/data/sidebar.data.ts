import { SidebarContent } from "../interfaces/common.interfaces";

const followsData: SidebarContent[] = [
  { path: "/updates", title: "Updates" },
  { path: "/library", title: "Library" },
  { path: "/mdlists", title: "MDLists" },
  { path: "/followed-groups", title: "Followed Groups" },
  { path: "/reading-history", title: "Reading History" },
];

const titlesData: SidebarContent[] = [
  { path: "/titles", title: "Advanced Search" },
  { path: "/recently-added", title: "Recently Added" },
  { path: "/latest-updates", title: "Latest Updates" },
  { path: "/random", title: "Random" },
];

const communityData: SidebarContent[] = [
  { path: "/groups", title: "Groups" },
  { path: "/users", title: "Users" },
];

const mangadexData: SidebarContent[] = [
  { path: "/about", title: "About Us" },
  { path: "/rules", title: "Site Rules" },
  { path: "/announcements", title: "Announcements" },
  { path: "/merch", title: "Merch Store" },
];

export { followsData, titlesData, communityData, mangadexData };
