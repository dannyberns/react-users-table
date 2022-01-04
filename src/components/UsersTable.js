import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import UsersTableHead from "./UsersTableHead";
import UsersTableBody from "./UsersTableBody";
import { Table, TableContainer, Paper } from "@mui/material";

const UsersTable = () => {
  const { sortByHeader } = useGlobalContext();
  const [orderBy, setOrderBy] = useState("");
  const [orderDirection, setOrderDirection] = useState("asc");

  const handleRequestSort = header => {
    const isAsc = orderBy === header && orderDirection === "asc";
    const direction = isAsc ? "desc" : "asc";
    setOrderDirection(direction);
    setOrderBy(header);
    sortByHeader(header, direction);
  };

  return (
    <>
      <TableContainer component={Paper} className="box-shadow table-container">
        <Table aria-label="simple table" stickyHeader>
          <UsersTableHead
            orderBy={orderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <UsersTableBody />
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;
