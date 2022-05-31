import { Divider, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";
import TabPanel from "../../components/TabPanel";
import Security from "../../components/account/Security";
import General from "../../components/account/General";

function a11yProps(index: any) {
  return {
    id: `change-password-tab-${index}`,
    "aria-controls": `change-password-tabpanel-${index}`,
  };
}

const AccountSettings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Security" {...a11yProps(1)} />
      </Tabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <General />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Security />
      </TabPanel>
    </div>
  );
};

export default AccountSettings;
