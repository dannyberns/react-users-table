import React, { useState } from "react";
import { Typography, Pagination, Stack } from "@mui/material";
import { useGlobalContext } from "../context/context";

const CPagination = () => {
  const { handlePage, page } = useGlobalContext();
  // const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    handlePage(value);
    // setPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" mt={2}>
      {/* <Typography>Page: {page}</Typography> */}
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
