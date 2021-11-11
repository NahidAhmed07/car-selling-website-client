import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAuth from "../../../hook/useAuth";
import { Button } from "@mui/material";
import avatar from "../../../images/avater2.png";

const style = {
  position: "absolute",
  top: "60px",
  right: "30px",
  width: "220px",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  p: 4,
  borderRadius: "5px",
};

const UserModal = ({ open, handleClose }) => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            src={user.photoURL || avatar}
            alt=""
            style={{ borderRadius: "100%", margin: "0 auto", width: "100px" }}
          />
          <hr />
          <Typography variant="h6" sx={{ mt: "10px" }} component="h2">
            {user.displayName}
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }}>{user.email}</Typography>
          <Button
            variant="contained"
            onClick={() => {
              logout();
              handleClose();
            }}
          >
            Logout
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default UserModal;
