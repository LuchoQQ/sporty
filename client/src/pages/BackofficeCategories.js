import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackofficeTable from "../components/BackofficeTable";
import axios from "axios";

const BackofficeCategories = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/products/category")
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

export default BackofficeCategories;
