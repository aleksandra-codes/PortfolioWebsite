import { AiFillHtml5 } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiAndroid,
  SiJava,
  SiJavascript,
  SiJirasoftware,
  SiMaterialui,
  SiTypescript,
  SiVisualstudio,
  SiJquery,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { Skill } from "../types/types";

export const skills: Array<Skill> = [
  {
    icon: AiFillHtml5,
    name: "HTML",
  },
  {
    icon: IoLogoCss3,
    name: "CSS",
  },
  {
    icon: FaSass,
    name: "Sass",
  },
  {
    icon: BiGitBranch,
    name: "Git",
  },
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  {
    icon: SiJavascript,
    name: "Javascript",
  },
  {
    icon: SiMaterialui,
    name: "Material UI",
  },
  {
    icon: SiJirasoftware,
    name: "Jira",
  },
  {
    icon: SiVisualstudio,
    name: "VS Code",
  },
  {
    icon: SiAndroid,
    name: "Android",
  },
  {
    icon: SiJava,
    name: "Java",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
  },
  {
    icon: SiJquery,
    name: "jQuery",
  },
];
