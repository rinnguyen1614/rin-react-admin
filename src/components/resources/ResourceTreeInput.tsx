import { useGetList } from "ra-core";
import React, { FC, ReactElement } from "react";
import TreeInput from "../tree/TreeInput";

interface Props {
  source: string;
}

const ResourceTreeInput: FC<Props> = ({ source, ...props }): ReactElement => {
  const { data: resources, isLoading } = useGetList("admin/resources/trees", {
    filter: { selects: "id,slug,name,object, action, parent_id" },
    pagination: { perPage: 1000, page: 1 },
  });

  return (
    !isLoading && (
      <TreeInput
        label=""
        resource="resources"
        optionText="name"
        optionValue="id"
        source={source}
        choices={resources}
        fullWidth
      />
    )
  );
};

export default ResourceTreeInput;
