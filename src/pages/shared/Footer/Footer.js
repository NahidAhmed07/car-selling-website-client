import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box className="footer" sx={{ py: 5, textAlign: "left" }}>
      <Container>
        <Grid container spacing={5}>
          {/* userful link  */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h5">Useful Link</Typography>
            <hr />
            <br />
            <ul className="useful-links">
              <li>
                <NavLink to="/home">&#62; Home</NavLink>
              </li>
              <li>
                <NavLink to="/moreCar"> &#62; Explore Car </NavLink>
              </li>

              <li>
                <NavLink to="/about">&#62; About</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard">&#62; Dashboard</NavLink>
              </li>

              <li>
                <NavLink to="/login">&#62; Login</NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {/* post single items  */}
            <Typography variant="h5">Contact Information</Typography>

            <hr />
            <br />
            <Box>
              <strong>Email :</strong> <br />
              <p className="email"> developernahid@gmail.com</p>
              <p className="email">mdnahidahmed2002@gmail.com</p>
              <strong>Phone : </strong> <br />
              <p className="phone">01758597460</p>
              <p className="phone">01627816080</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h5">Our Showroom</Typography>
            <hr />
            <br />
            <p>Electro Car, 789 Main rd, Anytown, CA 12345 USA</p>
            <p>+1 800 789 0000</p>
            <p>electro.car@gmail.com</p>
            <p>Mon – Fri : 09am to 06pm</p>
          </Grid>
        </Grid>

        <br />
        <br />
        <p style={{ textAlign: "center" }}>
          Copyright © 2021 Nahid Ahmed. Rights Reserved.
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
