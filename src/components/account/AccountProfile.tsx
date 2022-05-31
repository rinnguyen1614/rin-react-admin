import { Box, Card, CardHeader, Divider, Grid } from "@mui/material";
import * as React from "react";
import { FC, useCallback, useEffect, useState } from "react";
import {
  required,
  SaveButton,
  SimpleForm,
  TextInput,
  useGetIdentity,
  useNotify,
  UserIdentity,
  useTranslate,
} from "react-admin";
import useUpdateIdentity from "../auth/useUpdateIdentity";

interface Props {}

const ProfileButton: FC<Props> = ({ ...props }) => {
  const translate = useTranslate();
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <SaveButton
          color="primary"
          variant="contained"
          label={translate("rin.auth.update_profile")}
          {...props}
        />
      </Box>
    </>
  );
};

const AccountProfile = () => {
  const [loaded, setLoaded] = useState(false);
  const [identity, setIdentity] = useState<UserIdentity>();
  const translate = useTranslate();
  const notify = useNotify();
  const getIdentity = useGetIdentity();
  const updateIdentity = useUpdateIdentity();

  useEffect(() => {
    const { isLoading, identity } = getIdentity;
    setIdentity(identity);
    setLoaded(isLoading);
  }, [getIdentity]);

  const save = useCallback(
    async (values: any) => {
      try {
        setIdentity(await updateIdentity(values));
        notify("rin.auth.update_profile_success");
      } catch (err: any) {
        notify(err, { type: "warning" });
      } finally {
      }
    },
    [updateIdentity]
  );

  return loaded ? (
    <Card>
      <CardHeader title={translate("rin.auth.profile")} />
      <Divider />
      <SimpleForm defaultValues={identity} toolbar={<ProfileButton />}>
        <Box style={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextInput
                source="fullName"
                label={translate("rin.auth.full_name")}
                validate={required()}
                fullWidth
                variant="outlined"
                margin="none"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextInput
                source="email"
                type="email"
                label={translate("rin.auth.email")}
                validate={required()}
                fullWidth
                variant="outlined"
                margin="none"
              />
            </Grid>
          </Grid>
        </Box>
      </SimpleForm>
    </Card>
  ) : null;
};

export default AccountProfile;
