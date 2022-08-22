import React from "react";
import BackofficeTable from "../components/BackofficeTable";
import EditingLayout from './EditingLayout'
import ErrorLayout from './ErrorLayout'
const BackofficeLayout = ({ error, editing, loading, data }) => {
  return (
    <>
        {
            editing === true 
            ? <EditingLayout /> 
            : error === false 
                ? loading === false
                    ?   <BackofficeTable data={data}/>
                    :   <>Loading</>
                : <ErrorLayout/>
            }

    </>
  );
};

export default BackofficeLayout;
