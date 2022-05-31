import * as React from "react";
import { FC, Fragment, ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  List,
  MenuItem,
  ListItemIcon,
  Typography,
  Collapse,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTranslate, useSidebarState } from "react-admin";

const useStyles = makeStyles((theme) => ({
  icon: { minWidth: theme.spacing(5) },
  sidebarIsOpen: {
    "& a": {
      paddingLeft: theme.spacing(4),
      transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    },
  },
  sidebarIsClosed: {
    "& a": {
      paddingLeft: theme.spacing(2),
      transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    },
  },
}));

interface Props {
  dense: boolean;
  handleToggle: () => void;
  icon: ReactElement;
  isOpen: boolean;
  name: string;
}

const SubMenu: FC<Props> = ({
  handleToggle,
  isOpen,
  name,
  icon,
  children,
  dense,
}) => {
  const translate = useTranslate();
  const classes = useStyles();
  const [sidebarIsOpen] = useSidebarState();

  const header = (
    <MenuItem onClick={handleToggle} dense={dense}>
      <ListItemIcon className={classes.icon}>
        {isOpen ? <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {translate(name, {
          smart_count: 2,
        })}
      </Typography>
    </MenuItem>
  );

  return (
    <Fragment>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip
          title={translate(name, {
            smart_count: 2,
          })}
          placement="right"
        >
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          className={
            sidebarIsOpen ? classes.sidebarIsOpen : classes.sidebarIsClosed
          }
        >
          {children}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default SubMenu;
