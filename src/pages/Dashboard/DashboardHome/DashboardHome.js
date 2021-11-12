import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hook/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500 }} variant="h3">
          Dashboard Home
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 500 }}>
            H! {user.displayName} <br />
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 500, mt: 5 }}>
            Welcome to Our Dashboard <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://image.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg"
              alt="payment"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
