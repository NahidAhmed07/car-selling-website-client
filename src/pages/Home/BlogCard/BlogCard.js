import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const BlogCard = ({ blog }) => {
  const { img, title, description, country, comment } = blog;
  return (
    <Card
      style={{ margin: "0 auto" }}
      sx={{ maxWidth: 345, textAlign: "left" }}
    >
      <CardMedia
        className="card-img"
        component="img"
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ display: "flex", mb: 2, alignItems: "center" }} gutterBottom>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            variant="body1"
            color="text.secondary"
          >
            <PersonIcon />
            Posted by <span className="clr-red">{country}</span>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", ml: 3 }}
            variant="body1"
            color="text.secondary"
          >
            <QuestionAnswerIcon />
            <span className="clr-red"> {comment} comments</span>
          </Typography>
        </Box>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: "Saira Condensed" }}
        >
          {title}
        </Typography>
        <span className="top_red-box"></span>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          {description}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
