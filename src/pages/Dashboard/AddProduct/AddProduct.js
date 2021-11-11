import { Button, Grid, LinearProgress, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const fieldStyle = {
  width: "90%",
  my: 2,
};

const AddProduct = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...productInfo };
    newData[field] = value;
    setProductInfo(newData);
  };

  const handleSubmit = (e) => {
    setIsAdding(true);
    if (!productInfo?.img?.includes("http")) {
      productInfo.img = "https://i.ibb.co/gRmyzYn/imgNot.png";
    }
    if (productInfo?.rating > 5) {
      productInfo.rating = 5;
    }
    axios
      .post("https://fierce-forest-16777.herokuapp.com/addProduct", productInfo)
      .then((res) => {
        if (res.data.insertedId) {
          swal(`Successful`, "product Added Successfully ", "success");
        } else {
          swal(`Failed`, "Something went wrong ", "error");
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsAdding(false);
        e.target.reset();
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Add a new Product</h2>
      <Grid container>
        <Grid item xs={12} md={6}>
          {isAdding && (
            <Box sx={{ width: "90%", mx: "auto" }}>
              <LinearProgress />
            </Box>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              sx={fieldStyle}
              required
              label="Product Name"
              variant="standard"
              onBlur={handleOnBlur}
              name="productName"
            />
            <TextField
              sx={fieldStyle}
              required
              label="Image url"
              variant="standard"
              onBlur={handleOnBlur}
              name="img"
            />
            <TextField
              sx={fieldStyle}
              label="Description"
              required
              multiline
              rows={3}
              variant="filled"
              onBlur={handleOnBlur}
              name="description"
            />
            <TextField
              sx={fieldStyle}
              required
              type="number"
              label="Product price"
              variant="standard"
              onBlur={handleOnBlur}
              name="price"
            />
            <TextField
              sx={fieldStyle}
              required
              type="number"
              label="Rating"
              variant="standard"
              onBlur={handleOnBlur}
              name="rating"
            />
            <Button variant="contained" sx={fieldStyle} type="submit">
              Add Product
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img src="https://i.ibb.co/3WQwhwM/addproduct.jpg" alt="" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;
