import { Box, Card, CardHeader, Divider, Grid } from "@mui/material";
import * as React from "react";
import {
  useTranslate,
  useNotify,
  TextInput,
  required,
  useAuthProvider,
  SimpleForm,
  SaveButton,
  useRefresh,
} from "react-admin";
import { FC, useCallback } from "react";

interface Props {
  saving: boolean;
}

const ChangePasswordButton: FC<Props> = ({ saving, ...props }) => {
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
          disabled={saving}
          label={translate("rin.auth.change_password")}
          {...props}
        />
      </Box>
    </>
  );
};

const ChangePasswordForm = () => {
  const [saving, setSaving] = React.useState(false);
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const authProvider = useAuthProvider();

  const save = useCallback(
    (values: any) => {
      setSaving(true);
      authProvider
        .changePassword(values)
        .then(() => {
          notify("rin.auth.change_password_success");
        })
        .catch((error: any) => {
          notify(error, { type: "warning" });
        })
        .finally(() => {
          setSaving(false);
          refresh();
        });
    },
    [authProvider, notify, refresh]
  );

  return (
    <Card>
      <CardHeader title={translate("rin.auth.change_password")} />
      <Divider />
      <SimpleForm toolbar={<ChangePasswordButton saving={saving} />}>
        <Box style={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextInput
                source="currentPassword"
                type="password"
                label={translate("rin.auth.current_password")}
                validate={required()}
                fullWidth
                disabled={saving}
                helperText={false}
                variant="outlined"
                margin="none"
              />
            </Grid>
            <Grid
              component={Box}
              item
              md={6}
              display={{ xs: "none", md: "block" }}
            ></Grid>
            <Grid item md={6} xs={12}>
              <TextInput
                source="newPassword"
                type="password"
                label={translate("rin.auth.new_password")}
                validate={required()}
                fullWidth
                disabled={saving}
                helperText={false}
                variant="outlined"
                margin="none"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextInput
                source="confirmPassword"
                type="password"
                label={translate("rin.auth.confirm_password")}
                validate={required()}
                fullWidth
                disabled={saving}
                helperText={false}
                variant="outlined"
                margin="none"
              />
            </Grid>
          </Grid>
        </Box>
      </SimpleForm>
    </Card>
  );
};

export default ChangePasswordForm;
