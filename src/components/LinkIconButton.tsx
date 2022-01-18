import { Link, SvgIconProps, Tooltip, Typography } from "@mui/material";
import "./css/LinkIconButton.css";
export interface LinkIconButtonProps {
  tooltip: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  link: string;
  className?: string;
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  text?: string;
}

const LinkIconButton = (props: LinkIconButtonProps) => {
  return (
    <Tooltip title={props.tooltip}>
      <Link href={props.link} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
        {props.icon ? (
          <props.icon
            className={`linkIcon ` + props.className}
            fontSize={props.fontSize}
          />
        ) : (
          <Typography variant="subtitle1" className={`linkIcon ` + props.className}>{props.text}</Typography>
        )}
      </Link>
    </Tooltip>
  );
};

export default LinkIconButton;
