import "./css/Sidebar.css";
import LinkIconButton from "../components/LinkIconButton";
import { LinkIconButtonProps, SidebarProps } from "../types/types";
import { sidebarData } from "../data/sidebarData";

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
