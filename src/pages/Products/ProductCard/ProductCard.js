import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const ratingStyle = {
  fontSize: "18px",
  color: "goldenrod",
};

const ProductCard = ({ product }) => {
  const { img, productName, price, description, rating, _id } = product;
  return (
    <Card
      style={{ margin: "0 auto", fontFamily: "Saira Condensed" }}
      sx={{ maxWidth: 345, textAlign: "left", fontFamily: "Saira Condensed" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
          className="card-img"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontFamily: "Saira Condensed" }}
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
            <Typography
              variant="h5"
              gutterBottom
              component="h3"
              style={{ fontFamily: "Saira Condensed" }}
            >
              $ {price}
            </Typography>
            <Typography variant="body1">
              {[...Array(parseInt(rating)).keys()].map((index) => (
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" component={Link} to={`/product/${_id}`}>
          buy now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
