import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  TextField,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import {
  ArrowDropDown,
  Logout,
  Notifications,
  Search,
} from "@mui/icons-material";
import './Header.css';

function Header({ children }) {
  return (
    <>
      <AppBar
        className="header"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Health Insurance
          </Typography>
          <Box display="flex" marginLeft="auto">
            <Button
              className="header-search-button"
            >
              <IconButton>
                <Search />
              </IconButton>
              <TextField
                variant="standard"
                placeholder="Search..."
                className="header-search-text"
              />
            </Button>
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: blue[700],
                }}
              >
                Đ
              </Avatar>
              <ArrowDropDown />
            </IconButton>
            <IconButton>
              <Badge badgeContent={1} color="warning">
                <Notifications />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

export default Header;
