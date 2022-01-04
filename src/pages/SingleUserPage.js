import React, { useEffect } from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material/";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";
import { UserMap, Navbar, Title } from "../components";
import { useTitle } from "../utils/useTitle";

const SingleUserPage = () => {
  useTitle("User Details");
  const { username } = useParams();
  const { single_user, users, getSingleUser } = useGlobalContext();

  useEffect(() => {
    getSingleUser(username);
  }, [username]);

  if (!single_user) return <Loading />;

  const { age, email, gender, name, picture, coordinates, city, street } =
    single_user;
  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Navbar />

          <Grid container className="border-radius box-shadow grid-mobile-wrap">
            <Grid item md={4} xs={12} className="user-details-wrapper">
              <Title />
              <div className="user-details">
                <div>
                  <Avatar src={picture.large} className="avatar" />
                  <Typography variant="h5" color="textPrimary" align="center">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {email}
                  </Typography>
                </div>
                <div className="user-details-info">
                  <Grid
                    container
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
                </div>
              </div>
            </Grid>
            <Grid item md={8} xs={12}>
              <UserMap coordinates={coordinates} street={street} city={city} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default SingleUserPage;
