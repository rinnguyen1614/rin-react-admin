import * as React from "react";
import { forwardRef } from "react";
import { useTranslate } from "ra-core";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import Logo from "./Logo";
import { AppBar, UserMenu, MenuItemLink } from "ra-ui-materialui";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/configuration"
      primaryText={translate("rin.configuration")}
      leftIcon={<SettingsIcon />}
      onClick={props.onClick}
      sidebarIsOpen
    />
  );
});

const AccountSettingsMenu = forwardRef<any, any>((props, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/settings"
      primaryText={translate("rin.settings")}
      leftIcon={<AccountIcon />}
      onClick={props.onClick}
      sidebarIsOpen
    />
  );
});

const CustomUserMenu = (props: any) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
    <AccountSettingsMenu />
  </UserMenu>
);

const CustomAppBar = (props: any) => {
  const classes = useStyles();
  return (
    <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <Logo />
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
