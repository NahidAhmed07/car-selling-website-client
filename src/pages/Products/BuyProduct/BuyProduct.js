import {
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Navigation from "../../shared/Navigation/Navigation";
import StarIcon from "@mui/icons-material/Star";
import swal from "sweetalert";
import useAuth from "../../../hook/useAuth";

const ratingStyle = {
  fontSize: "18px",
  color: "goldenrod",
};
const fieldStyle = {
  width: "100%",
  my: 2,
  mx: "auto",
};

const BuyProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...orderInfo };
    newData[field] = value;
    setOrderInfo(newData);
  };

  const handleSubmit = (e) => {
    setIsAdding(true);
    orderInfo.name = user.displayName;
    orderInfo.email = user.email;
    orderInfo.productId = product._id;
    orderInfo.productName = product.productName;
    orderInfo.description = product.description;
    orderInfo.price = product.price;
    orderInfo.img = product.img;
    orderInfo.status = "Pending";
    orderInfo.orderDate = new Date();

    axios
      .post("https://fierce-forest-16777.herokuapp.com/orders", orderInfo)
      .then((res) => {
        if (res.data.insertedId) {
          history.goBack();
          swal(`Successful`, "Order Added Successfully ", "success");
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

  useEffect(() => {
    axios
      .get(`https://fierce-forest-16777.herokuapp.com/product/single/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  const { img, productName, description, price, rating } = product;
  return (
    <div style={{ paddingTop: "70px", textAlign: "left" }}>
      <Navigation></Navigation>

      <Container>
        <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            Confirm your Order
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={img} alt="" style={{ width: "100%" }} />
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ mt: 3 }}
              component="div"
            >
              {productName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom component="h3">
                $ {price}
              </Typography>
              <Typography variant="body1">
                {[...Array(parseInt(rating || 4)).keys()].map((index) => (
                  <StarIcon sx={ratingStyle} key={index} />
                ))}
                ({rating} reviews)
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              {description
                ?.split(" ")
                ?.slice(0, 18)
                ?.toString()
                ?.replace(/,/g, " ")}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            {isAdding && (
              <Box sx={{ width: "100%", mx: "auto" }}>
                <LinearProgress />
              </Box>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ my: 1 }}
                fullWidth
                onBlur={handleOnBlur}
                name="name"
                defaultValue={user.displayName}
                disabled
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                onBlur={handleOnBlur}
                name="email"
                defaultValue={user.email}
                disabled
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                onBlur={handleOnBlur}
                name="phone"
                required
                placeholder="Your Phone Number"
                label="Your Phone Number"
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                onBlur={handleOnBlur}
                name="address"
                required
                placeholder="Your Address"
                label="Your Address"
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                onBlur={handleOnBlur}
                name="deliveryDate"
                required
                label="Delivery Date"
                type="date"
              />
              <Button variant="contained" sx={fieldStyle} type="submit">
                Confirm Order
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BuyProduct;
