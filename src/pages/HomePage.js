import React from "react";
import { UsersTable, CPagination, Navbar } from "../components";
import { useTitle } from "../utils/useTitle";
import { Container } from "@mui/material";

const HomePage = () => {
  useTitle("All users");

  return (
    <main>
      <Container maxWidth="lg">
        <Navbar title="home" />
        <UsersTable />
        <CPagination />
      </Container>
    </main>
  );
};

export default HomePage;
