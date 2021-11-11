import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageUser from "../ManageUser/ManageUser";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PaymentIcon from "@mui/icons-material/Payment";
import MakePayment from "../MakePayment/MakePayment";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LogoutIcon from "@mui/icons-material/Logout";
import AddReviews from "../AddReviews/AddReviews";
import MyOrders from "../MyOrders/MyOrders";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* list item 1  */}
        <ListItem button component={Link} to={`${url}/myOrder`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <BorderAllIcon />
          </ListItemIcon>
          <ListItemText primary="My Orders" />
        </ListItem>
        {/* list item 3  */}
        <ListItem button component={Link} to={`${url}/payment`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Make Payment" />
        </ListItem>
        {/* list item 3  */}
        <ListItem button component={Link} to={`${url}/reviews`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary="Review" />
        </ListItem>
        {/* list item 2  */}
        <ListItem button component={Link} to={`${url}/make_admin`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Make Admin" />
        </ListItem>
        {/* list item 2  */}
        <ListItem button component={Link} to={`${url}/manage_order`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <AppRegistrationIcon />
          </ListItemIcon>
          <ListItemText primary="Manage All Order" />
        </ListItem>
        {/* list item 2  */}
        <ListItem button component={Link} to={`${url}/manage_user`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Manage AlL User" />
        </ListItem>
        {/* list item 2  */}
        <ListItem button component={Link} to={`${url}/add_product`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <AddTaskIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Product" />
        </ListItem>
        {/* list item 2  */}
        <ListItem button>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Button
            variant="text"
            component={Link}
            to="/"
            style={{ color: "white", marginLeft: "5%" }}
          >
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Switch>
          <Route exact path={path} component={DashboardHome} />
          <Route path={`${path}/myOrder`} component={MyOrders} />
          <Route path={`${path}/make_admin`} component={MakeAdmin} />
          <Route path={`${path}/add_product`} component={AddProduct} />
          <Route path={`${path}/manage_order`} component={ManageOrder} />
          <Route path={`${path}/manage_user`} component={ManageUser} />
          <Route path={`${path}/payment`} component={MakePayment} />
          <Route path={`${path}/reviews`} component={AddReviews} />
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
