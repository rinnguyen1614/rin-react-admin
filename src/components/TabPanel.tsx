import React, { FC } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Tab, Tabs, AppBar, Box, Typography } from "@mui/material";

interface Props {
  index: any;
  value: any;
}

const useStyles = makeStyles({
  root: { width: "100%" },
});

const TabPanel: FC<Props> = ({ children, value, index, ...other }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </Typography>
    </div>
  );
};

export default TabPanel;
