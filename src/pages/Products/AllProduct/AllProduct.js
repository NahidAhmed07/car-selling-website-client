import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";

const AllProduct = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <ProductCard></ProductCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
      </Grid>
    </Container>
  );
};

export default AllProduct;
