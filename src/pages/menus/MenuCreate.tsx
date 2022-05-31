import { CreateProps } from "ra-ui-materialui";
import React, { ReactElement } from "react";
import CreateBase from "../../components/auth/CreateBase";
import MenuForm from "../../components/menus/MenuForm";
import { Menu } from "../../types";

interface Props extends CreateProps<Menu> {}

const MenuCreate = (props: Props): ReactElement => {
  return (
    <CreateBase {...props}>
      <MenuForm />
    </CreateBase>
  );
};

export default MenuCreate;
