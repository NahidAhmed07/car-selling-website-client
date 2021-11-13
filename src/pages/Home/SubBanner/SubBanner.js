import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SubBanner = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%", height: "300px" }}
              src="https://klbtheme.com/harrier/wp-content/uploads/2019/03/speakers.png"
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%", height: "300px" }}
              src="https://klbtheme.com/harrier/wp-content/uploads/2019/03/schedule.png"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubBanner;
