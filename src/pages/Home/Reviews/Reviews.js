import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Reviews.css";
import avatar from "../../../images/avater2.png";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://fierce-forest-16777.herokuapp.com/review")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Box className="testimonial-main">
      <Container sx={{ py: 5 }}>
        <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
          <Typography
            sx={{ fontWeight: 500, textAlign: "left", color: "white" }}
            variant="h3"
          >
            Happy Customer Says
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Grid item xs={12} md={6} lg={4} key={review._id}>
                <Box
                  sx={{ position: "relative", pb: 5, borderRadius: "5px" }}
                  className="test-card"
                >
                  <Box className="test-img">
                    <img
                      style={{ width: "100%" }}
                      src="https://i.ibb.co/1Tggz6k/photo-1518987048-93e29699e79a.jpg"
                      alt=""
                    />
                  </Box>
                  <Box className="test-circle-img">
                    <img
                      style={{ width: "100%" }}
                      src={review.img || avatar}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ p: 3 }} className="test-text">
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                      {review.title}
                    </Typography>
                    <h6>
                      {[...Array(5).keys()].map((index) => (
                        <StarIcon key={index} className="star-icon" />
                      ))}
                    </h6>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      {review.des}
                    </Typography>
                    <strong
                      className="pb-1"
                      style={{ borderBottom: "2px solid #ffc107" }}
                    >
                      read more
                    </strong>
                  </Box>
                </Box>
              </Grid>
            ))
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
              );
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
