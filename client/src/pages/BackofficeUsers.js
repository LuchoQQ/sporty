import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackofficeTable from "../components/BackofficeTable";
import axios from "axios";

const BackofficeUsers = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async() => {
      await axios
        .get("http://localhost:4000/auth/users")
        .then((res) => setData(res.data));
      setLoading(false);
    };
    fetchData()
  }, []);

  return (
    <>
      <Box h="15vh" />
      {loading === false ? <BackofficeTable data={data} /> : null}
    </>
  );
};

export default BackofficeUsers
