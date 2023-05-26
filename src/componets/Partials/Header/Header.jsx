import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  InputBase,
  Paper,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Fade,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { blue } from "@mui/material/colors";
import { KeyboardArrowDown, Notifications, Search } from "@mui/icons-material";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ children }) {
  const [openAdmin, setOpenAdmin] = useState(false);
  const anchorAdminRef = useRef(null);
  const [openNoti, setOpenNoti] = useState(false);
  const anchorNotiRef = useRef(null);

  const handleToggleAdmin = () => {
    setOpenAdmin((prevOpen) => !prevOpen);
  };
  const handleCloseAdmin = (event) => {
    if (anchorAdminRef.current && anchorAdminRef.current.contains(event.target)) {
      return;
    }
    setOpenAdmin(false);
  };
  function handleListKeyDownAdmin(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenAdmin(false);
    } else if (event.key === "Escape") {
      setOpenAdmin(false);
    }
  }
  const prevOpenAdmin = useRef(openAdmin);
  useEffect(() => {
    if (prevOpenAdmin.current === true && openAdmin === false) {
      anchorAdminRef.current.focus();
    }
    prevOpenAdmin.current = openAdmin;
  }, [openAdmin]);

// ---------------------------------------------------------

  const handleToggleNoti = () => {
    setOpenNoti((prevOpen) => !prevOpen);
  };

  const handleCloseNoti = (event) => {
    if (anchorNotiRef.current && anchorNotiRef.current.contains(event.target)) {
      return;
    }

    setOpenNoti(false);
  };

  function handleListKeyDownNoti(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenNoti(false);
    } else if (event.key === "Escape") {
      setOpenNoti(false);
    }
  }

  const prevOpenNoti = useRef(openNoti);
  useEffect(() => {
    if (prevOpenNoti.current === true && openNoti === false) {
      anchorNotiRef.current.focus();
    }

    prevOpenNoti.current = openNoti;
  }, [openNoti]);

  return (
    <>
      <AppBar className="header">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Health Insurance
          </Typography>
          <Box display="flex" marginLeft="auto">
            <Paper component="form" className="header-search-button">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search here" }}
                className="header-search-input"
              />
              <IconButton
                type="button"
                sx={{ p: "10px", ml: 2}}
                ref={anchorNotiRef}
                id="notification-button"
                aria-controls={openNoti ? "notification-menu" : undefined}
                aria-expanded={openNoti ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggleNoti}
              >
                <Badge variant="dot" color="warning">
                  <Notifications />
                </Badge>
              </IconButton>
              <Popper
                open={openNoti}
                anchorEl={anchorNotiRef.current}
                role={undefined}
                placement="bottom-end"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Fade
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-end"
                          ? "left top"
                          : "right bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseNoti}>
                        <MenuList
                          autoFocusItem={openNoti}
                          id="notification-menu"
                          aria-labelledby="notification-button"
                          onKeyDown={handleListKeyDownNoti}
                          className="menu-notifications"
                        >
                          <MenuItem onClick={handleCloseNoti}>Notifications 1</MenuItem>
                          <MenuItem onClick={handleCloseNoti}>Notifications 2</MenuItem>
                          <MenuItem onClick={handleCloseNoti}>Notifications 3</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Fade>
                )}
              </Popper>
              <Avatar
                sx={{
                  bgcolor: blue[700],
                  marginLeft: "15px",
                  marginTop: "3px",
                  marginRight: "10px",
                }}
              >
                Đ
              </Avatar>
            </Paper>
            <Paper component="form" className="header-user-box">
              <Typography variant="body2">Admin</Typography>
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                ref={anchorAdminRef}
                id="admin-button"
                aria-controls={openAdmin ? "admin-menu" : undefined}
                aria-expanded={openAdmin ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggleAdmin}
              >
                <KeyboardArrowDown />
              </IconButton>
              <Popper
                open={openAdmin}
                anchorEl={anchorAdminRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Fade
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseAdmin}>
                        <MenuList
                          autoFocusItem={openAdmin}
                          id="admin-menu"
                          aria-labelledby="admin-button"
                          onKeyDown={handleListKeyDownAdmin}
                          className="menu-admin"
                        >
                          <Link to="/myAccount"><MenuItem onClick={handleCloseAdmin} >Admin</MenuItem></Link>
                          <Link><MenuItem onClick={handleCloseAdmin} >Change Password</MenuItem></Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Paper>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

export default Header;
