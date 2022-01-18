import { SvgIconProps } from "@mui/material";

export interface Skill {
  icon: (props: SvgIconProps) => JSX.Element;
  name: string;
}

export interface ProjectCard {
  src: string;
  description: string;
  name: string;
  technologies: string[];
  githubLink?: string;
}

export interface SidebarProps {
  side: string;
  data: LinkIconButtonProps[];
}

export interface LinkIconButtonProps {
  tooltip: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  link: string;
  className?: string;
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  text?: string;
}
