import { SidebarProps } from "../types/types";
import { contactButtons } from "./contactButtons";

export const rightSidebarData = [
  {
    link: "mailto:asorokina@my.bcit.ca?",
    tooltip: "Get in touch!",
    text: "aleksandra.codes@gmail.com",
  },
];

export const sidebarData: SidebarProps[] = [
  {
    side: "left",
    data: contactButtons,
  },

  {
    side: "right email",
    data: rightSidebarData,
  },
];
