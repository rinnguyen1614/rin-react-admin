import Icon from "@mui/material/Icon";
import { makeStyles } from "@mui/styles";
import { isEmpty } from "lodash";
import { useEffect, useMemo, useRef, useState } from "react";
import { MenuItemLink, MenuProps, useTranslate } from "react-admin";
import { matchPath, useLocation } from "react-router";
import useMenus from "./auth/useMenus";
import SubMenu from "./SubMenu";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({});
  const translate = useTranslate();
  const classes = useStyles();
  const { menus, isLoading } = useMenus();
  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  const isFirstRender = useRef(true);
  const { pathname } = useLocation();

  const opens = useMemo(() => {
    let opens = {};
    menus?.forEach((menu) => {
      for (let open of openMenus(menu, pathname)) {
        opens[open] = true;
      }
      if (!isEmpty(opens)) {
        return opens;
      }
    });
    return opens;
  }, [menus, pathname]);

  useEffect(() => {
    if (!isLoading && isFirstRender.current) {
      isFirstRender.current = false;
      setState(opens);
      return;
    }
  }, [opens, isLoading]);

  const renderMenuItem = (menu) => {
    if (menu.type === "M") {
      return (
        <SubMenu
          key={menu.id}
          handleToggle={() => handleToggle(menu.id)}
          isOpen={state[menu.id]}
          name={`resources.${menu.slug}.name`}
          icon={<Icon>{menu.icon}</Icon>}
          dense={dense}
        >
          {menu.children && Array.isArray(menu.children)
            ? menu.children?.map((child: any, rowIndex: number) =>
                renderMenuItem(child)
              )
            : null}
        </SubMenu>
      );
    }
    if (menu.type === "A") {
      return (
        <MenuItemLink
          key={menu.id}
          to={menu.path}
          primaryText={translate(`resources.${menu.slug}.name`, {
            smart_count: 2,
          })}
          leftIcon={<Icon>{menu.icon}</Icon>}
          dense={dense}
        />
      );
    }
    return null;
  };
  return (
    !isLoading && (
      <div className={classes.root}>
        {menus?.map((menu) => renderMenuItem(menu))}
      </div>
    )
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

function* openMenus(menu, path) {
  if (menu.type === "M" && menu.children && Array.isArray(menu.children)) {
    for (var child of menu.children) {
      if (openMenus(child, path)) {
        yield menu.id;
        return true;
      }
    }
  }

  if (menu.type === "MI" && !!matchPath(menu.path, path)) {
    return true;
  }

  return false;
}

export default Menu;
