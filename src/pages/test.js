import React, { useEffect } from "react";
import { Container, Typography, Grid, Avatar, Stack } from "@mui/material/";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";
import { UserMap, Navbar, Title } from "../components";
import { useTitle } from "../utils/useTitle";

const Test = () => {
  useTitle("User Details");
  const { username } = useParams();
  const { single_user, users, getSingleUser } = useGlobalContext();

  useEffect(() => {
    getSingleUser(username);
  }, [users]);

  if (!single_user) return <Loading />;

  const { age, email, gender, name, picture, coordinates, city, street } =
    single_user;
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Navbar />
          <div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="box-shadow border-radius"
            >
              <Grid item xs={12} md={4}>
                <Title />
                <Stack spacing={4}>
                  <Stack alignItems="center">
                    <Avatar
                      sx={{ width: 175, height: 175 }}
                      src={picture.large}
                    />
                    <Typography variant="h5" color="textPrimary">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {email}
                    </Typography>
                  </Stack>

                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    textAlign="center"
                  >
                    <Grid item>
                      <Typography variant="subtitle1" color="textPrimary">
                        AGE
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {age}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" color="textPrimary">
                        GENDER
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {gender}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
              <Grid item xs={12} md={8}>
                <UserMap
                  coordinates={coordinates}
                  street={street}
                  city={city}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Test;
