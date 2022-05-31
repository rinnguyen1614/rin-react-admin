import { EditProps } from "ra-ui-materialui";
import React, { ReactElement } from "react";
import EditBase from "../../components/auth/EditBase";
import MenuForm from "../../components/menus/MenuForm";
import { Menu } from "../../types";

interface Props extends EditProps<Menu> {}

const MenuEdit = (props: Props): ReactElement => {
  return (
    <EditBase mutationMode="pessimistic" {...props}>
      <MenuForm />
    </EditBase>
  );
};

export default MenuEdit;
