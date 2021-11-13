import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TopCarCard from "../TopCarCard/TopCarCard";

const TopSellerCar = () => {
  const [topCar, setTopCar] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/topCar").then((res) => {
      setTopCar(res.data);
    });
  }, []);

  return (
    <Container sx={{ my: 8 }}>
      <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500, textAlign: "left" }} variant="h3">
          Best Seller Car
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {topCar.length < 1 ? (
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          topCar.map((product) => {
            return (
              <Grid key={product._id} item xs={12} md={6} lg={4}>
                <TopCarCard product={product}></TopCarCard>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default TopSellerCar;
