import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutTop = () => {
  return (
    <Box className="news-letter">
      <Box sx={{ color: "white" }}>
        <Typography gutterBottom sx={{ fontWeight: 500 }} variant="h3">
          About Us
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutTop;
