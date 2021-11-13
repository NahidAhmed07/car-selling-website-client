import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import SpeedSharpIcon from "@mui/icons-material/SpeedSharp";
import EventNoteSharpIcon from "@mui/icons-material/EventNoteSharp";
import SettingsIcon from "@mui/icons-material/Settings";

const TopCarCard = ({ product }) => {
  const { img, title, price, year, speed } = product;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className="card-img"
        component="img"
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent>
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
          variant="h5"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
          style={{ fontFamily: "Saira Condensed" }}
        >
          $ {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box>
          <SpeedSharpIcon sx={{ color: "text.secondary" }} />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
            style={{ fontFamily: "Saira Condensed" }}
          >
            {speed}
          </Typography>
        </Box>
        <Box>
          <SettingsIcon sx={{ color: "text.secondary" }} />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
            style={{ fontFamily: "Saira Condensed" }}
          >
            Automatic
          </Typography>
        </Box>
        <Box>
          <EventNoteSharpIcon sx={{ color: "text.secondary" }} />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
            style={{ fontFamily: "Saira Condensed" }}
          >
            {year}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TopCarCard;
