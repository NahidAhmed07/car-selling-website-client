import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import useAuth from "../../../hook/useAuth";

const fieldStyle = {
  width: "100%",
  my: 2,
  mx: "auto",
};

const AddReviews = () => {
  const [reviewData, setReviewData] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...reviewData };
    newData[field] = value;
    setReviewData(newData);
  };

  const handleSubmit = (e) => {
    setIsAdding(true);
    reviewData.title = user.displayName;
    reviewData.email = user.email;
    reviewData.img = user.photoURL;
    axios
      .post("https://fierce-forest-16777.herokuapp.com/review", reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          swal(`Successful`, "Order Added Successfully ", "success");
          history.goBack();
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
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500 }} variant="h3">
          Make a Reviews
        </Typography>
      </Box>

      <Grid container spacing={4}>
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
              name="title"
              variant="standard"
              defaultValue={user.displayName}
              disabled
            />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              variant="standard"
              onBlur={handleOnBlur}
              name="email"
              defaultValue={user.email}
              disabled
            />
            <TextField
              sx={fieldStyle}
              label="Description"
              required
              multiline
              rows={3}
              variant="filled"
              onBlur={handleOnBlur}
              name="des"
            />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              onBlur={handleOnBlur}
              name="rating"
              type="number"
              variant="standard"
              required
              placeholder="Rating"
              label="Rating"
            />

            <Button variant="contained" sx={fieldStyle} type="submit">
              {isAdding ? (
                <CircularProgress
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "white",
                  }}
                />
              ) : (
                "Make Review"
              )}
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://image.freepik.com/free-vector/location-review-concept-illustration_114360-4711.jpg"
              alt="payment"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddReviews;
