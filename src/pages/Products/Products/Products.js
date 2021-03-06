import { Box } from "@mui/system";
import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import AllProduct from "../AllProduct/AllProduct";

const Products = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Box sx={{ mt: 12 }}>
        <AllProduct apiPath="all"></AllProduct>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Products;
