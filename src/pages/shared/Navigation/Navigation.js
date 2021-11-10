import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import avatar from "../../../images/avater2.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// IMPORTING ICONS
import { CloseSharp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/logo.png";
import { Box } from "@mui/system";
import useAuth from "../../../hook/useAuth";
import UserModal from "../userModal/UserModal";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

const navItem = { color: "white", fontSize: "1rem", marginRight: "20px" };

const Navigation = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const { user } = useAuth();

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#23292E", color: "white" }}>
        <Toolbar>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <img style={{ width: 100, marginLeft: "30px" }} src={logo} alt="" />

            <Typography variant="h4">ElectroCar</Typography>
          </Box>
          <Box
            sx={{ display: { xs: "block", md: "none" }, alignItems: "center" }}
          >
            <img
              src={user.photoURL || avatar}
              style={{ width: "50px", borderRadius: "100%", marginTop: "5px" }}
              onClick={handleOpen}
              alt=""
            />
          </Box>
          {isMobile ? (
            <React.Fragment>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                style={{ width: "100vw" }}
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                KeepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
              >
                <MenuItem
                  style={{ width: "100vw" }}
                  onClick={() => setAnchor(null)}
                >
                  <ListItemIcon>
                    <CloseSharp />
                  </ListItemIcon>
                </MenuItem>

                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/"
                  style={{ width: "100%" }}
                >
                  <Typography variant="h6"> Home</Typography>
                </MenuItem>
                {/* item 2 */}
                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/more_car"
                >
                  <Typography variant="h6"> More Car </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/about"
                >
                  <Typography variant="h6"> About</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => setAnchor(null)}
                  component={Link}
                  to="/dashboard"
                >
                  <Typography variant="h6"> Dashboard </Typography>
                </MenuItem>
              </Menu>
            </React.Fragment>
          ) : (
            <div
              style={{
                marginRight: "2rem",
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button variant="text" component={Link} to="/" style={navItem}>
                Home
              </Button>
              <Button
                variant="text"
                component={Link}
                to="/more_car"
                style={navItem}
              >
                More Car
              </Button>
              <Button variant="text" component={Link} to="/" style={navItem}>
                About
              </Button>
              {user.email ? (
                <>
                  <Button
                    variant="text"
                    component={Link}
                    to="/dashboard"
                    style={navItem}
                  >
                    Dashboard
                  </Button>
                  <img
                    src={user.photoURL || avatar}
                    style={{
                      width: "50px",
                      borderRadius: "100%",
                      marginTop: "5px",
                    }}
                    onClick={handleOpen}
                    alt=""
                  />
                </>
              ) : (
                <Button variant="contained" component={Link} to="/login">
                  Login
                </Button>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <UserModal open={modalOpen} handleClose={handleClose}></UserModal>
    </div>
  );
};

export default Navigation;