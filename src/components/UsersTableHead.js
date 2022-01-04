import React from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { headers } from "../utils/constants";

const UsersTableHead = ({ orderBy, orderDirection, handleRequestSort }) => {
  const createSortHandler = header => {
    handleRequestSort(header);
  };

  return (
    <TableHead>
      <TableRow className="primary-color">
        {headers.map(header => {
          return (
            <TableCell key={header.id}>
              {header.name === "Picture" ? (
                <span className="white-color">{header.name}</span>
              ) : (
                <TableSortLabel
                  className="white-color"
                  active={orderBy === header.name}
                  direction={orderBy === header.name ? orderDirection : "asc"}
                  onClick={() => createSortHandler(header.name)}
                >
                  {header.name}
                </TableSortLabel>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default UsersTableHead;
