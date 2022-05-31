import { CreateProps } from "ra-ui-materialui";
import React, { ReactElement } from "react";
import CreateBase from "../../components/auth/CreateBase";
import ResourceForm from "../../components/resources/ResourceForm";
import { Resource } from "../../types";

interface Props extends CreateProps<Resource> {}

const ResourceCreate = (props: Props): ReactElement => {
  return (
    <CreateBase {...props}>
      <ResourceForm />
    </CreateBase>
  );
};

export default ResourceCreate;
