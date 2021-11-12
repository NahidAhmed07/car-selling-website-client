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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import StarIcon from "@mui/icons-material/Star";
import { useHistory } from "react-router";

const ratingStyle = {
  fontSize: "18px",
  color: "goldenrod",
};

const ManageProduct = ({ url }) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://fierce-forest-16777.herokuapp.com/product/all`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleApproved = (id) => {
    axios
      .put(`https://fierce-forest-16777.herokuapp.com/order?id=${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const findItem = products.find((product) => product._id === id);
          if (findItem) {
            findItem.status = "approved";
            const remaining = products.filter(
              (product) => !(product._id === id)
            );

            setProducts([findItem, ...remaining]);
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

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Delete This Order form Order list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://fierce-forest-16777.herokuapp.com/product?id=${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = products.filter(
                (product) => !(product._id === id)
              );
              setProducts(remaining);
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
        <Typography sx={{ fontWeight: 500 }} variant="h3">
          Manage All Products
        </Typography>
      </Box>

      <Grid container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">#No:</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Product Price</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length > 0 ? (
                products.map((product, index) => {
                  return (
                    <TableRow key={product._id}>
                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left">{product.productName}</TableCell>
                      <TableCell align="left">{product.price}</TableCell>
                      <TableCell align="left">
                        <Typography variant="body1">
                          {[...Array(parseInt(product.rating)).keys()].map(
                            (index) => (
                              <StarIcon sx={ratingStyle} key={index} />
                            )
                          )}
                          ({product.rating})
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          onClick={() =>
                            history.push(`${url}/product_edit/${product._id}`)
                          }
                        >
                          <EditIcon />
                        </Button>

                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#BC243E",
                            marginLeft: "10px",
                          }}
                          onClick={() => handleDelete(product._id)}
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

export default ManageProduct;
