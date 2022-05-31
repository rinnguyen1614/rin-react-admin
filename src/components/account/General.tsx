import { Card, Grid } from "@mui/material";
import * as React from "react";
import AccountPicture from "./AccountPicture";
import AccountProfile from "./AccountProfile";

const General = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
        <AccountPicture />
      </Grid>
      <Grid item md={8} xs={12}>
        <AccountProfile />
      </Grid>
    </Grid>
  );
};

export default General;
