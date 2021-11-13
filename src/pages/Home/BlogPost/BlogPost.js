import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://fierce-forest-16777.herokuapp.com/blog").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  console.log(blogs);
  return (
    <Container sx={{ my: 8 }}>
      <Box sx={{ my: 8, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500, textAlign: "left" }} variant="h3">
          Our Blog Post
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {blogs.length < 1 ? (
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
        ) : (
          blogs.map((blog) => {
            return (
              <Grid key={blog._id} item xs={12} md={6} lg={4}>
                <BlogCard blog={blog}></BlogCard>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default BlogPost;
