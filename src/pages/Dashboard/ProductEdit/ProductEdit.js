import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const ProductEdit = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { register, handleSubmit, setValue, reset } = useForm();
  const history = useHistory();

  // product data load to database
  useEffect(() => {
    axios
      .get(`https://fierce-forest-16777.herokuapp.com/product/single/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  const { productName, img, description, price, rating } = product;

  // set all field default value using react-hook-form setValue function
  setValue("productName", productName);
  setValue("img", img);
  setValue("description", description);
  setValue("price", price);
  setValue("rating", rating);

  // handle onSubmit function
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(
        `https://fierce-forest-16777.herokuapp.com/product?id=${product._id}`,
        data
      )
      .then((res) => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          // reset form
          reset();
          history.goBack();
          swal(`Successful`, "product Successfully Updated", "success");
        } else {
          swal(`Failed`, "Something went wrong, Please try again ", "error");
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsAdding(false);
      });
  };

  return (
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500 }} variant="h3">
          Update OR Edit Product
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          {isAdding && (
            <Box sx={{ width: "90%", mx: "auto" }}>
              <LinearProgress />
            </Box>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
            <label>Product Name :</label> <br />
            <input {...register("productName")} /> <br />
            <label>Product Image :</label> <br />
            <input {...register("img")} />
            <br />
            <label>Description :</label> <br />
            <textarea rows="3" {...register("description")} />
            <br />
            <label>Product Price :</label> <br />
            <input {...register("price")} type="number" />
            <br />
            <label>
              Rating : <small>(1 to 5)</small>
            </label>{" "}
            <br />
            <input {...register("rating", { min: 0, max: 5 })} type="number" />
            <br />
            <Button sx={{ width: "100%" }} type="submit" variant="contained">
              {isAdding ? (
                <CircularProgress
                  style={{ width: "20px", height: "20px", color: "white" }}
                />
              ) : (
                "Update Product"
              )}
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="https://image.freepik.com/free-vector/update-concept-illustration_114360-1742.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductEdit;
