import React from "react";
import { Pagination, Stack } from "@mui/material";
import { useGlobalContext } from "../context/context";

const CPagination = () => {
  const { handlePage, page } = useGlobalContext();
  const handleChange = (event, value) => {
    handlePage(value);
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
