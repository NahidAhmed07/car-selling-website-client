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
import useAuth from "../../../hook/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import HomeIcon from "@mui/icons-material/Home";
import ManageProduct from "../ManageProduct/ManageProduct";
import ProductEdit from "../ProductEdit/ProductEdit";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logout, isAdmin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* list item 1  */}
        <ListItem button component={Link} to={`/`}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {isAdmin || (
          <Box>
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
          </Box>
        )}

        {/* list item 2  */}
        {isAdmin && (
          <Box>
            {/* list item 2  */}
            <ListItem button component={Link} to={`${url}/manage_order`}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText primary="Manage All Order" />
            </ListItem>
            {/* list item 2  */}
            <ListItem button component={Link} to={`${url}/manage_product`}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>
            {/* list item 2  */}
            <ListItem button component={Link} to={`${url}/add_product`}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <AddTaskIcon />
              </ListItemIcon>
              <ListItemText primary="Add New Product" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/make_admin`}>
              <ListItemIcon sx={{ minWidth: 35 }}>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>
          </Box>
        )}
        {/* list item 2  */}
        <ListItem button onClick={logout}>
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
          <Typography
            variant="h6"
            sx={{ textAlign: "center", width: "100%" }}
            noWrap
            component="div"
          >
            Dashboard
          </Typography>
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
          <PrivateRoute path={`${path}/myOrder`}>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <AdminRoute path={`${path}/make_admin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/add_product`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manage_order`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>

          <AdminRoute path={`${path}/manage_product`}>
            <ManageProduct url={url}></ManageProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/product_edit/:id`}>
            <ProductEdit></ProductEdit>
          </AdminRoute>
          <PrivateRoute path={`${path}/payment`}>
            <MakePayment></MakePayment>
          </PrivateRoute>
          <PrivateRoute path={`${path}/reviews`}>
            <AddReviews></AddReviews>
          </PrivateRoute>
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
