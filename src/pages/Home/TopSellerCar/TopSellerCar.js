import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TopSellerCar = () => {
  return (
    <Container>
      <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500, textAlign: "left" }} variant="h3">
          Best Seller Car
        </Typography>
      </Box>
      <Grid container>
        <Grid item sx={12} md={6} lg={4} xl={3}></Grid>
        <Grid item sx={12} md={6} lg={4} xl={3}></Grid>
      </Grid>
    </Container>
  );
};

export default TopSellerCar;
