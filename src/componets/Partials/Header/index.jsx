import { AppBar, Toolbar, Typography, Box, Button} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Header({ children }) {

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#29C282", zIndex: "102" }}>
        <Toolbar>          
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Health Insurance
            </Typography>
          
          <Box display="flex" marginLeft="auto">
            <Button
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}

export default Header;
