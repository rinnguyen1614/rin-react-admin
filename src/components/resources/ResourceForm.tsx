import { parse } from "query-string";
import { minLength, required, useSaveContext } from "ra-core";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import { FC } from "react";
import { useLocation } from "react-router";
import { FormToolbarWithRefresh } from "../FormToolbarWithRefresh";
import RequestMethodInput from "../requestMethods/RequestMethodInput";

interface Props {}

const ResourceForm: FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const parent_id = Number(searchParams.parent_id || 0);

  return (
    <SimpleForm
      defaultValues={{
        parent_id: parent_id,
      }}
      toolbar={<FormToolbarWithRefresh />}
    >
      <TextInput
        autoFocus
        source="name"
        fullWidth
        validate={(required(), minLength(6))}
      />
      <TextInput
        source="slug"
        fullWidth
        validate={(required(), minLength(6))}
      />
      <TextInput source="object" fullWidth validate={minLength(6)} />
      <RequestMethodInput source="action" fullWidth />
      <TextInput source="description" fullWidth />
    </SimpleForm>
  );
};
export default ResourceForm;
