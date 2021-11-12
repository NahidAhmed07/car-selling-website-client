import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CircularProgress } from "@material-ui/core";

const fieldStyle = {
  width: "100%",
  my: 2,
  mx: "auto",
};

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    setIsAdding(true);

    fetch(`http://localhost:5000/addAdmin?email=${email}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsAdding(false));
    e.preventDefault();
  };

  return (
    <Box sx={{ textAlign: "left", mr: { xs: 0, md: 2, lg: 5, xl: 8 } }}>
      <Box sx={{ my: 5, borderBottom: "3px solid goldenrod", pb: 2 }}>
        <Typography sx={{ fontWeight: 500 }} variant="h3">
          Add a New Admin
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                style={fieldStyle}
                required
                id="standard-basic"
                type="email"
                label="Email Address"
                variant="standard"
                onBlur={(e) => setEmail(e.target.value)}
              />
              <Button
                sx={{ width: "100%", mt: 5 }}
                type="submit"
                variant="contained"
              >
                {isAdding ? (
                  <CircularProgress
                    style={{ width: "20px", height: "20px", color: "white" }}
                  />
                ) : (
                  "Add Admin"
                )}
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://image.freepik.com/free-vector/update-concept-illustration_114360-1742.jpg"
              alt="payment"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeAdmin;
