import { Box, Icon, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { ReactElement } from "react";
import { ListProps } from "react-admin";
import ListBase from "../../components/auth/ListBase";
import { RequestMethodField } from "../../components/requestMethods/RequestMethodField";
import { TreeView } from "../../components/tree/TreeView";
import MenuCreate from "./MenuCreate";
import MenuEdit from "./MenuEdit";

const MenuList = (props: ListProps): ReactElement => {
  return (
    <ListBase
      resource="admin/menus/trees"
      filter={{ selects: "id,slug,name,path,parent_id,icon" }}
      pagination={false}
      perPage={1000}
      {...props}
    >
      <TreeView
        resource="admin/menus"
        resourceTree="admin/menus/trees"
        create={<MenuCreate />}
        edit={<MenuEdit />}
        addRootButton={true}
        nodeText={(node) => (
          <MenuItem component="div">
            {node.icon && (
              <ListItemIcon>
                <Icon fontSize="small">{node.icon}</Icon>
              </ListItemIcon>
            )}
            <ListItemText
              primary={node.name}
              secondary={
                (node.method || node.path) && (
                  <>
                    <RequestMethodField record={node.method} small={true} />{" "}
                    <Box component="span" ml={1}>
                      {node.path}
                    </Box>
                  </>
                )
              }
            />
          </MenuItem>
        )}
      ></TreeView>
    </ListBase>
  );
};

export default MenuList;
