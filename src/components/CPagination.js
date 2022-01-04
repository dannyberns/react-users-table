import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useGlobalContext } from "../context/context";

const CPagination = () => {
  const { handlePage } = useGlobalContext();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    handlePage(value);
    setPage(value);
  };

  return (
    <Stack className="pagination">
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
};

export default CPagination;
