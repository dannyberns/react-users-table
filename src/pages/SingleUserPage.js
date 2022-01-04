import React, { useEffect } from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material/";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { UserMap, Navbar, Title, Error, Loading } from "../components";
import { useTitle } from "../utils/useTitle";

const Test = () => {
  useTitle("User Details");
  const { username } = useParams();
  const {
    users,
    getSingleUser,
    single_user,
    single_user_error: error,
    single_user_loading: loading
  } = useGlobalContext();

  useEffect(() => {
    getSingleUser(username);
    // eslint-disable-next-line
  }, [users]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    single_user && (
      <main>
        <Container maxWidth="lg">
          <Navbar />

          <Grid container className="border-radius box-shadow grid-mobile-wrap">
            <Grid item md={4} xs={12} className="user-details-wrapper">
              <Title />
              <div className="user-details">
                <div>
                  <Avatar src={single_user.picture.large} className="avatar" />
                  <Typography variant="h5" color="textPrimary" align="center">
                    {single_user.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {single_user.email}
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
                        {single_user.age}
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
                        {single_user.gender}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid item md={8} xs={12}>
              <UserMap
                coordinates={single_user.coordinates}
                street={single_user.street}
                city={single_user.city}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    )
  );
};

export default Test;
