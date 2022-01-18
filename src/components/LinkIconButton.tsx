import { Link, Tooltip, Typography } from "@mui/material";
import { LinkIconButtonProps } from "../types/types";
import "./css/LinkIconButton.css";

const LinkIconButton = (props: LinkIconButtonProps) => {
  return (
    <Tooltip title={props.tooltip}>
      <Link
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {props.icon ? (
          <props.icon
            className={`linkIcon ` + props.className}
            fontSize={props.fontSize}
          />
        ) : (
          <Typography
            variant="subtitle1"
            className={`linkIcon ` + props.className}
          >
            {props.text}
          </Typography>
        )}
      </Link>
    </Tooltip>
  );
};

export default LinkIconButton;
