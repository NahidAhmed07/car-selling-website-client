import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useCounter from "../../../hook/useCounter";
import { imageArray } from "../../../utilities/utilities";
import "./Hero.css";

const Hero = () => {
  const [counter] = useCounter(0, imageArray.length);
  const heroBannerStyle = {
    backgroundImage: `url(${imageArray[counter]})`,
    transition: "all 1.5s ease",
  };

  const textBoxStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  return (
    <div
      className="hero-banner container-fluid text-white"
      style={heroBannerStyle}
      id="hero"
    >
      <Container sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          {/* hero text  */}
          <Grid item xs={12} md={9} lg={6} sx={{ textAlign: "left" }}>
            <Box sx={textBoxStyle} className="hero-text">
              <Typography
                variant="h2"
                sx={{ fontSize: { sx: 30, md: 40, lg: 60 } }}
              >
                <span style={{ color: "#BC243E" }}>POWER</span> & BEAUTY
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Free Library’s $1M auto archives are moving to Philly’s
                world-famous car museum and to a Hershey attraction
              </Typography>
              <br />
              <Box>
                <Button variant="contained" sx={{ mr: 4 }}>
                  GET STARTED
                </Button>
                <Button variant="contained">CONTACT</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
