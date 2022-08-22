import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BackofficeTable from "../components/BackofficeTable"
const BackofficeProducts = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/products")
        .then((res) => setData(res.data));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Box h="15vh" />
      {loading === false ? <BackofficeTable data={data} /> : null}
    </>
  );
};

export default BackofficeProducts;
