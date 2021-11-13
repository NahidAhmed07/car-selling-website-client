import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
const AllProduct = ({ apiPath }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fierce-forest-16777.herokuapp.com/product/${apiPath}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [apiPath]);

  return (
    <>
      <Container sx={{ textAlign: "left", mb: 8 }}>
        <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            Top Rated Car
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {products.length < 1 ? (
            // loading spinner make center
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
            products.map((product) => {
              return (
                <Grid key={product._id} item xs={12} md={6} lg={4}>
                  <ProductCard product={product}></ProductCard>
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
      {}
    </>
  );
};

export default AllProduct;
