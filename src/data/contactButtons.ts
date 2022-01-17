import { LinkIconButtonProps } from "../components/LinkIconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";

export const contactButtons: Array<LinkIconButtonProps> = [
    {
      tooltip: "LinkdIn",
      link: "https://www.linkedin.com/in/aleksandra-sorokina/",
      icon: LinkedInIcon,
    },
    {
      tooltip: "Resume",
      link: "#",
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