import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlogPost = () => {
  return (
    <Container>
      <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500, textAlign: "left" }} variant="h3">
          Our Blog Post
        </Typography>
      </Box>
    </Container>
  );
};

export default BlogPost;
