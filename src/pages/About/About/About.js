import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Container sx={{ textAlign: "left", my: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ my: 2, borderBottom: "3px solid goldenrod", pb: 2 }}>
            <Typography
              sx={{ fontWeight: 500, textAlign: "left" }}
              variant="h4"
            >
              Who we are
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="GrayText">
              ElectroCar is a leading digital marketplace and solutions provider
              for the automotive industry that connects car shoppers with
              sellers. Launched in 1998 and headquartered in Chicago, the
              Company empowers shoppers with the data, resources and digital
              tools needed to make informed buying decisions and seamlessly
              connect with automotive retailers. In a rapidly changing market,
              Cars.com enables dealerships and OEMs with innovative technical
              solutions and data-driven intelligence to better reach and
              influence ready-to-buy shoppers, increase inventory turn and gain
              market share. In 2018, Cars.com acquired Dealer Inspire®, an
              innovative technology company building solutions that future-proof
              dealerships with more efficient operations, a faster and easier
              car buying process, and connected digital experiences that sell
              and service more vehicles.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://image.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
