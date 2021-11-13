import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundImage:
          "url(https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png?fbclid=IwAR0IS3lfgsOOHw_VnXx4645MezfeNMdEdfEAQpslEotAX_-RZZ4mdtGevuo)",
      }}
    >
      <Container style={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                mt: { xs: 1, md: 5 },
                pt: { xs: 1, md: 4 },
              }}
              className="serviceOne"
            >
              <Typography
                variant="h2"
                sx={{ pb: 2, textAlign: "left", fontWeight: 400 }}
                style={{ borderBottom: "3px solid #ffc107" }}
              >
                <span> PAGE </span>
                NOT FOUND
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <p style={{ textAlign: "left" }}>
          <Button variant="contained" onClick={() => history.goBack()}>
            Back to Home
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default NotFound;
