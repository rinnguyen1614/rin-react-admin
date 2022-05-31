import { Box, ListItemText, MenuItem } from "@mui/material";
import { ReactElement } from "react";
import { ListProps, NullableBooleanInput, TextInput } from "react-admin";
import { RequestMethodField } from "../../components/requestMethods/RequestMethodField";
import { TreeView } from "../../components/tree/TreeView";
import ResourceCreate from "./ResourceCreate";
import ResourceEdit from "./ResourceEdit";
import ListBase from "../../components/auth/ListBase";

const resourceFilters = [
  <TextInput label="Search" source="q=name:like,slug:like" alwaysOn />,
  <NullableBooleanInput label="Default" source="is_default" />,
];

const ResourceList = (props: ListProps): ReactElement => {
  return (
    <ListBase
      resource="admin/resources/trees"
      filters={resourceFilters}
      filter={{ selects: "id,slug,name,object, action, parent_id" }}
      pagination={false}
      perPage={1000}
      {...props}
    >
      <TreeView
        resource="admin/resources"
        resourceTree="admin/resources/trees"
        create={<ResourceCreate />}
        edit={<ResourceEdit />}
        addRootButton={true}
        nodeText={(node) => (
          <MenuItem component="div">
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

export default ResourceList;
