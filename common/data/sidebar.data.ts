import { SidebarContent } from "../interfaces/common.interfaces";

const followsData: SidebarContent[] = [
  { path: "/titles/feed", title: "Updates" },
  { path: "/titles/follows", title: "Library" },
  { path: "/mdlists", title: "MDLists" },
  { path: "/followed-groups", title: "Followed Groups" },
  { path: "/reading-history", title: "Reading History" },
];

const titlesData: SidebarContent[] = [
  { path: "/titles", title: "Advanced Search" },
  { path: "/titles/recent", title: "Recently Added" },
  { path: "/titles/latest", title: "Latest Updates" },
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
