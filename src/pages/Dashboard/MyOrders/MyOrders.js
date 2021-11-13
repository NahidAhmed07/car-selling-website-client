import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  CircularProgress,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../../hook/useAuth";
import swal from "sweetalert";
import axios from "axios";

const ratingStyle = {
  fontSize: "18px",
  color: "goldenrod",
};

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [notFount, setNotFount] = useState(false);

  // user order delete function
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Cancel this order",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://fierce-forest-16777.herokuapp.com/order?id=${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              const remaining = orders.filter((order) => order._id !== id);
              if (remaining.length === 0) {
                setNotFount(true);
              }
              setOrders(remaining);
            }
          })
          .catch((err) => console.log(err.message));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // load user order data to database
  useEffect(() => {
    fetch(
      `https://fierce-forest-16777.herokuapp.com/myOrder?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    )
      .then((res) => res.json())
      // check user order list is Empty ?
      .then((data) => {
        if (data.notFount) {
          setNotFount(data.notFount);
        } else {
          setOrders(data);
        }
      })
      .catch((err) => console.log(err.message));
  }, [user.email]);

  return (
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          My Orders
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {notFount && (
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center" }} variant="h4">
              Your Order list is Empty
            </Typography>
          </Grid>
        )}
        {orders.length >= 1 &&
          orders.map((order) => (
            <Grid item xs={12} md={6} lg={4} key={order._id}>
              <Card sx={{ maxWidth: 345, textAlign: "left" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={order.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {order.productName}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" gutterBottom component="h3">
                        $ {order.price}
                      </Typography>
                      {/* show rating using array method */}
                      <Typography variant="body1">
                        {[...Array(parseInt(4)).keys()].map((index) => (
                          <StarIcon sx={ratingStyle} key={index} />
                        ))}{" "}
                        (12)
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {order.description
                        ?.split(" ")
                        ?.slice(0, 18)
                        ?.toString()
                        ?.replace(/,/g, " ")}
                    </Typography>
                    {/* order status */}
                    <Typography variant="body2" sx={{ mt: 3 }}>
                      Status :&nbsp;
                      {order.status === "Pending" ? (
                        <span className="order-pending">Pending...</span>
                      ) : (
                        <span className="order-shipped">Shipped</span>
                      )}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#BC243E" }}
                    onClick={() => handleDelete(order._id)}
                  >
                    cancel Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        {orders.length === 0 && !notFount && (
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
        )}
      </Grid>
    </Box>
  );
};

export default MyOrders;
