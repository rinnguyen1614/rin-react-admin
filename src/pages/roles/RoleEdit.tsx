import { EditProps } from "ra-ui-materialui";
import React, { ReactElement } from "react";
import Edit from "../../components/auth/Edit";
import RoleForm from "../../components/roles/RoleForm";

const RoleEdit = (props: EditProps): ReactElement => {
  return (
    <Edit mutationMode="pessimistic" {...props}>
      <RoleForm />
    </Edit>
  );
};

export default RoleEdit;
