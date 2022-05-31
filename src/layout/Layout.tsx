import * as React from "react";
import { Layout as RaLayout, LayoutProps, Sidebar } from "react-admin";
import AppBar from "../components/AppBar";
import Menu from "../components/Menu";
import { ReactQueryDevtools } from "react-query/devtools";

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

const Layout = (props: LayoutProps) => {
  return (
    <>
      <RaLayout
        {...props}
        appBar={AppBar}
        sidebar={CustomSidebar}
        menu={Menu}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Layout;
