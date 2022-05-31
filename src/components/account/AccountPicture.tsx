import * as React from "react";
import { ReactElement } from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { ImageField, ImageInput } from "react-admin";

const AccountPicture = (): ReactElement => {
  return (
    <div>
      <Card>
        <CardHeader title="Profile Picture" />
        <Divider />
        <CardContent>
          <ImageInput
            source="pictures"
            label="Related pictures"
            accept="image/*"
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPicture;
