import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material/";

const Error = () => {
  return (
    <main className="section page-100">
      <section>
        <Typography variant="h1">SORRY</Typography>
        <Typography variant="h4">we couldn't find that user</Typography>
        <Typography variant="h4" mb={4}>
          please try again
        </Typography>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
};

export default Error;
