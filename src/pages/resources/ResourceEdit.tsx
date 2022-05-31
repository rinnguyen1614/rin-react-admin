import { EditProps } from "ra-ui-materialui";
import React, { ReactElement } from "react";
import EditBase from "../../components/auth/EditBase";
import ResourceForm from "../../components/resources/ResourceForm";
import { Resource } from "../../types";

interface Props extends EditProps<Resource> {}

const ResourceEdit = (props: Props): ReactElement => {
  return (
    <EditBase mutationMode="pessimistic" {...props}>
      <ResourceForm />
    </EditBase>
  );
};

export default ResourceEdit;
