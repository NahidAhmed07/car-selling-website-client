import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ApprovalIcon from "@mui/icons-material/Approval";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://fierce-forest-16777.herokuapp.com/order")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // handle order status change function
  const handleApproved = (id) => {
    axios
      .put(`https://fierce-forest-16777.herokuapp.com/order?id=${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const findItem = orders.find((order) => order._id === id);
          if (findItem) {
            findItem.status = "approved";
            const remaining = orders.filter((order) => !(order._id === id));

            setOrders([findItem, ...remaining]);
          }
        } else {
          swal({
            title: "This Service Already Approved !",
            icon: "warning",
          });
        }
      })
      .catch((err) => console.log(err.massage));
  };

  // delete user order function
  const handleDelete = (id) => {
    // before delete alert
    swal({
      title: "Are you sure?",
      text: "Delete This Order form Order list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://fierce-forest-16777.herokuapp.com/order?id=${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = orders.filter((order) => !(order._id === id));
              setOrders(remaining);
              // delete success alert
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err.message));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          Manage All Order
        </Typography>
      </Box>

      <Grid container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">User Name</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Order Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((order) => {
                  return (
                    <TableRow key={order._id}>
                      <TableCell align="left">{order.name}</TableCell>
                      <TableCell align="left">{order.productName}</TableCell>
                      <TableCell align="left">
                        {new Date(order.orderDate)?.toDateString()}
                      </TableCell>
                      <TableCell align="left">
                        {order.status !== "Pending" ? (
                          <span className="order-shipped">Shipped</span>
                        ) : (
                          <span className="order-pending">Pending...</span>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          onClick={() => handleApproved(order._id)}
                        >
                          <ApprovalIcon />
                        </Button>

                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#BC243E",
                            marginLeft: "10px",
                          }}
                          onClick={() => handleDelete(order._id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
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
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default ManageOrder;
