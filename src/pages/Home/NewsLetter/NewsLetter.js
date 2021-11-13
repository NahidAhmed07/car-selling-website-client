import EmailIcon from "@mui/icons-material/Email";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <Box className="news-letter">
      <Box sx={{ color: "white" }}>
        <Typography
          gutterBottom
          style={{
            color: "yellow",
            fontWeight: 400,
            fontFamily: "Saira Condensed",
          }}
          variant="h5"
        >
          NEWSlETTER
        </Typography>
        <Typography gutterBottom sx={{ fontWeight: 500 }} variant="h4">
          GET NOTIFIED OF ANY UPDATES!
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ px: 4, py: 1, width: "250px" }}
            label="Your email address"
            style={{ backgroundColor: "white" }}
            variant="filled"
          />
          <button className="news-btn">
            <EmailIcon sx={{ mr: 2 }} className="news-btn-icon" />
            SUBSCRIBE
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
