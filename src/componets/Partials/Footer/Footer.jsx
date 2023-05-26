import React from "react";
import img1 from "./TMAInsurance.png";
import { Copyright, Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box paddingTop="100px">
        <hr />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="footer-summary"
        >
          <Grid item xs={4} className="footer-summary-details">
            <Typography variant="h6" gutterBottom>
              <b>Contact Us</b>
            </Typography>
            <Typography>
              Contact Us 31 Hayward St, Ste J, Franklin, MA 02038
            </Typography>
            <Typography>
              p.<Link>(508)528-5200</Link>
            </Typography>
            <Typography>
              f.<Link>(508) 520-6914</Link>
            </Typography>
            <Typography>
              <Link>ContactUs@berryinsurance.com</Link>
            </Typography>
            <Typography>MA LIC#2018365</Typography>
            <Typography>
              <Link to="https://linkedIn.com">
                <LinkedIn />
              </Link>
              <Link to="https://youtube.com">
                <YouTube />
              </Link>
              <Link to="https://facebook.com">
                <Facebook />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className="footer-summary-details">
            <Typography variant="h6" gutterBottom>
              <b>Services</b>
            </Typography>
            <Typography>
              <Link>Business Insurance</Link>
            </Typography>
            <Typography>
              <Link>Personal Insurance</Link>
            </Typography>
            <Typography>
              <Link>Life Insurance</Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className="footer-summary-details">
            <Typography variant="h6" gutterBottom>
              <b>Resources</b>
            </Typography>
            <Typography>
              <Link>Learning Center</Link>
            </Typography>
            <Typography>
              <Link>Pricing</Link>
            </Typography>
            <Typography>
              <Link>Get a Quote</Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className="footer-summary-details">
            <Typography variant="h6" gutterBottom>
              <b>About Us</b>
            </Typography>
            <Typography>
              <Link>Our Agency</Link>
            </Typography>
            <Typography>
              <Link>Contact Us</Link>
            </Typography>
            <Typography>
              <Link>Agency New</Link>
            </Typography>
          </Grid>
          <Grid item xs={2} className="footer-summary-details">
            <Typography variant="h6" gutterBottom>
              <b>Client Support</b>
            </Typography>
            <Typography>
              <Link>Client Portal</Link>
            </Typography>
            <Typography>
              <Link>Mobile App</Link>
            </Typography>
            <Typography>
              <Link>Report a Claim</Link>
            </Typography>
            <Typography>
              <Link>Request a Certificate</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} className="footer-copyright">
          <Grid item xs={8} className="footer-content">
            <Typography>
              <Copyright /> All Rights Reserved. <Link>Privacy Policy</Link> |{" "}
              <Link>Terms & Conditions</Link> | <Link>Accessibility</Link> The
              information provided on our website does not guarantee any
              coverages or services, nor does it constitute legal, tax or
              insurance advice; instead, all information, and materials
              available on this site are for general educational purposes only.
            </Typography>
          </Grid>
          <Grid item xs={4} className="footer-logo">
            <img src={img1} alt="" loading="lazy" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
