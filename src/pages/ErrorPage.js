import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material/";

const ErrorPage = () => {
  return (
    <main className="section page-100">
      <section>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4" mb={4}>
          Sorry, the page you tried cannot be found
        </Typography>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
