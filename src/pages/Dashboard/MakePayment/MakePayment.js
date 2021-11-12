import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MakePayment = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mt: 6 }}>
            Payment System Coming Soon....
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://image.freepik.com/free-vector/payment-information-concept-illustration_114360-1733.jpg"
              alt="payment"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MakePayment;
