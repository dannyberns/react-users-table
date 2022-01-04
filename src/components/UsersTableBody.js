import React from "react";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";
import { TableBody, TableCell, TableRow, Avatar } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const UsersTableBody = () => {
  const { users, users_loading } = useGlobalContext();
  const navigate = useNavigate();

  const handleNavigate = (name, e) => {
    const isLink = e.target.href;
    if (!isLink) navigate(`/${name}`);
  };

  if (users_loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={6}>
            <Loading />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {users.map((user, index) => {
        const { email, gender, age, name, picture } = user;
        return (
          <TableRow
            key={index}
            onClick={e => {
              handleNavigate(name, e);
            }}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            className="cursor"
          >
            <TableCell component="th" scope="row">
              <Avatar alt={name} src={picture.thumbnail} />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell className="hover-color">
              <Link
                to="#"
                target="_blank"
                onClick={() => {
                  window.location = `mailto:${email}`;
                }}
              >
                {email}
              </Link>
            </TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{age}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default UsersTableBody;
