import { Box } from "@mui/system";
import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import AllProduct from "../AllProduct/AllProduct";

const Products = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Box sx={{ mt: 12 }}>
        <AllProduct apiPath="all"></AllProduct>
      </Box>
    </div>
  );
};

export default Products;
