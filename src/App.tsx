import { Settings } from "@mui/icons-material";
import polyglotI18nProvider from "ra-i18n-polyglot";
import * as React from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ChangePasswordForm from "./components/account/ChangePassword";
import englishMessages from "./i18n/en";
import { Layout } from "./layout";
import Configuration from "./pages/configuration/Configuration";
import Login from "./pages/Login";
import menus from "./pages/menus";
import resources from "./pages/resources";
import roles from "./pages/roles";
import authProvider from "./providers/authProvider";
import dataProviderFactory from "./providers/dataProvider";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "vi") {
    return import("./i18n/vi").then((messages) => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, "en");

const App = () => {
  return (
    <BrowserRouter>
      <Admin
        title="Rin"
        dataProvider={dataProviderFactory(
          process.env.REACT_APP_DATA_PROVIDER || ""
        )}
        authProvider={authProvider}
        loginPage={Login}
        layout={Layout}
        i18nProvider={i18nProvider}
        disableTelemetry
      >
        <CustomRoutes>
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/settings/changepassword"
            element={<ChangePasswordForm />}
          />
        </CustomRoutes>
        <Resource name="admin/resources" {...resources} />
        <Resource name="admin/menus" {...menus} />
        <Resource name="admin/roles" {...roles} />
      </Admin>
    </BrowserRouter>
  );
};

export default App;
