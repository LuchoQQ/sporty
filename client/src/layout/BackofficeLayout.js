import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import BackofficeTable from "../components/BackofficeTable";
import EditingLayout from "./EditingLayout";
import ErrorLayout from "./ErrorLayout";
const BackofficeLayout = ({
  error,
  editing,
  loading,
  data,
  removeItem,
  editItem,
}) => {
  return (
    <>
      

      {editing === true ? (
        <EditingLayout />
      ) : error === false ? (
        loading === false ? (
          <BackofficeTable
            data={data}
            removeItem={removeItem}
            editItem={editItem}
          />
        ) : (
          <>Loading</>
        )
      ) : (
        <ErrorLayout />
      )}
    </>
  );
};

export default BackofficeLayout;
