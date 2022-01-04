import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material/";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const Navbar = ({ title }) => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="bg-secondary">
        {title === "home" ? (
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color="#333"
          >
            All users
          </Typography>
        ) : (
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color="#333"
          >
            <Link to="/">
              <MdArrowBackIosNew size="18px" /> All users
            </Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
