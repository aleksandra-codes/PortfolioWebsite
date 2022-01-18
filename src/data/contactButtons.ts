import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import { LinkIconButtonProps } from "../types/types";

export const contactButtons: Array<LinkIconButtonProps> = [
  {
    tooltip: "LinkdIn",
    link: "https://www.linkedin.com/in/aleksandra-sorokina/",
    icon: LinkedInIcon,
  },
  {
    tooltip: "Resume",
    link: "https://www.aleksandrasorokina.com/asorokina_resume.pdf",
    icon: ArticleIcon,
  },
  {
    tooltip: "GitHub",
    link: "https://github.com/aleksandra-codes",
    icon: GitHubIcon,
  },
  {
    tooltip: "Email",
    link: "mailto:asorokina@my.bcit.ca?",
    icon: MailIcon,
  },
];
