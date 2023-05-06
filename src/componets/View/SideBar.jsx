import React, { useState } from "react";
import { Dashboard, Policy } from "@mui/icons-material/";
import CallIcon from "@mui/icons-material/Call";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
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
import './SideBar.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  position: "relative",
  zIndex: "100",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: "100",
  position: "relative",
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
    { label: "Dashboard", icon: Dashboard, to: "/dashboard" },
    { label: "Policy History", icon: Policy, to: "/policy" },
    { label: "Contact us", icon: CallIcon, to: "/contact" },
    { label: "Rewards", icon: EmojiEventsIcon, to: "/rewards" },
    { label: "Proposal", icon: ImportContactsIcon, to: "/proposal" },
    { label: "Service Request", icon: SmsFailedIcon, to: "/services" },
  ];

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };


  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        minWidth: "64px",
        maxWidth: "240px",
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleToggle}>
            {open == true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
                  sx={{ color: "#29C282", display: "block" }}
                  component={Link}
                  to = {text.to}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
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
                    <ListItemText
                      primary={text.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};
export default SideBars;
