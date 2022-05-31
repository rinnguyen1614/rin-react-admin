import { Divider, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import TabPanel from "../TabPanel";
import ChangePasswordForm from "./ChangePassword";

function a11yProps(index: any) {
  return {
    id: `security-tab-${index}`,
    "aria-controls": `security-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Security = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <Tab label="Change Password" {...a11yProps(0)} />
      </Tabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <ChangePasswordForm />
      </TabPanel>
    </div>
  );
};

export default Security;
