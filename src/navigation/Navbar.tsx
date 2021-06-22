import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LanguageChange from "./LanguageChange";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};




interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar>
          {/* <Typography variant="h6" className={classes.title}> */}
            {/* <NavLink to="projects">{t("home")} </NavLink>
             */}
            {/* <Scroll
              to="example-destination"
              spy={true}
              smooth={true}
              duration={500}
              className="some-class"
              activeClass="some-active-class"
            >
              Link Text Goes Here
            </Scroll> */}
          {/* </Typography> */}
          <Typography variant="h6" className={classes.title}>
            <a
              href="#about"
            >
              {t("aboutme")}
            </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <a href="#projects">{t("projects")}</a>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <a href="#contact">{t("contact")}</a>
          </Typography>

          <LanguageChange />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
