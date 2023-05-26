import React, { useEffect, useState } from "react";
import {
  CallEndOutlined,
  DashboardOutlined,
  Logout,
  MonetizationOnOutlined,
  Person2Outlined,
  PolicyOutlined,
  SupportAgent,
} from "@mui/icons-material/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "./SideBar.css";
import { logout, useAuthDispatch } from "../../../store/";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: "67px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  position: "fixed",
  zIndex: "100",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: "100",
  marginTop: "67px",
  position: "fixed",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBars = () => {
  const listSideBar = [
    {
      label: "Dashboard",
      icon: DashboardOutlined,
      to: "/dashboard",
      title: "Dashboard",
    },
    {
      label: "My Account",
      icon: Person2Outlined,
      to: "/myAccount",
      title: "My Account",
    },
    {
      label: "Policies",
      icon: PolicyOutlined,
      to: "/policies",
      title: "Policies",
    },
    {
      label: "Submit a Claim",
      icon: MonetizationOnOutlined,
      to: "/rewards",
      title: "Submit a Claim",
    },
    {
      label: "Contact us",
      icon: CallEndOutlined,
      to: "/contact",
      title: "Contact us",
    },
    {
      label: "Support Center",
      icon: SupportAgent,
      to: "/support",
      title: "Support Center",
    },
  ];

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleExpand = () => {
      const content = document.getElementsByClassName("content")[0];
      if (open) {
        content.classList.add("expanded");
        content.style.paddingLeft = "240px";
      } else {
        content.classList.remove("expanded");
        content.style.paddingLeft = "65px";
      }
    };
    handleExpand();
  }, [open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(dispatch);
    navigate("/login")
  };

  return (
    <Box>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{ height: "100%" }}>
        <DrawerHeader>
          <IconButton onClick={handleToggle}>
            {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listSideBar.map((text, index) => {
            const Icon = text.icon;
            return (
              <ListItem
                key={index}
                disablePadding
                component={Link}
                to={text.to}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <Tooltip title={text.title} placement="right" arrow>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#29C282",
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={text.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List className="list-logout">
          <ListItem
            disablePadding
            // component={Link}
            // to="/login"
            className="logout-button"
            onClick={handleLogout}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Tooltip title="Logout" placement="right" arrow>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#29C282",
                  }}
                >
                  <Logout />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default SideBars;
