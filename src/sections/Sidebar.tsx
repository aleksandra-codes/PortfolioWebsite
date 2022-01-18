import "./css/Sidebar.css";
import LinkIconButton, {
  LinkIconButtonProps,
} from "../components/LinkIconButton";
import { contactButtons } from "../data/contactButtons";

interface SidebarProps {
  side: string;
  data: LinkIconButtonProps[];
}

{
  /* <div id="rightSidebar">
<div className="email">
  <LinkIconButton
    link="mailto:asorokina@my.bcit.ca?"
    tooltip="Get in touch!"
    text="aleksandra.codes@gmail.com"
    className={classes.emailText}
  />
</div>
<hr className="vl" />
</div> */
}
const rightSidebarData = [
  {
    link: "mailto:asorokina@my.bcit.ca?",
    tooltip: "Get in touch!",
    text: "aleksandra.codes@gmail.com",
  },
];

const sidebarData: SidebarProps[] = [
  {
    side: "left",
    data: contactButtons,
  },

  {
    side: "right email",
    data: rightSidebarData,
  },
];

const Sidebar = () => {
  return (
    <>
      {sidebarData.map((side: SidebarProps) => (
        <>
          <div className={side.side}>
            {side.data.map((button: LinkIconButtonProps) => (
              <LinkIconButton
                link={button.link}
                icon={button.icon}
                tooltip={button.tooltip}
                text={button.text}
                fontSize="medium"
                className={button.className}
              />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Sidebar;
