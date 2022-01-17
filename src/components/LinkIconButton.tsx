import { Link, SvgIconProps, Tooltip } from "@mui/material";


export interface LinkIconButtonProps {
    tooltip: string,
    icon: (props: SvgIconProps) => JSX.Element,
    link: string, 
    className?: string,
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined
}

const LinkIconButton = (props: LinkIconButtonProps) => {

  return (
      <Tooltip title={props.tooltip}>
        <Link href={props.link} rel="noopener noreferrer" target="_blank">
          <props.icon className={props.className} fontSize={props.fontSize} />
        </Link>
      </Tooltip>
  );
};

export default LinkIconButton;