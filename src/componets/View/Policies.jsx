import React, { useState } from "react";
import "./CSS/Policies.css";
import PropTypes from "prop-types";
import {
  Alert,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../Partials";
import img from "../images/miway.png";
import img1 from "../images/outInsurance.jpg";
import { Autorenew } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Policies() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState(" ");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardPolicies = [
    {
      id: Math.random().toString(36).slice(-6).toUpperCase(),
      src: img,
      headerContent: "Motor Vehicle Insurance",
      bodyContent:
        "There are many validations of passengers of Lorem ipsum available, but the majority have suffered alteration in some form.",
      typeRequired: "warning",
      price: "R1500",
      requiredText: "EXPIRED IN 10 DAYS, RENEW NOW",
    },
    {
      id: Math.random().toString(36).slice(-6).toUpperCase(),
      src: img1,
      headerContent: "Motor Insurance",
      bodyContent:
        "There are many validations of passengers of Lorem ipsum available, but the majority have suffered alteration in some form.",
      typeRequired: "error",
      price: "R1500",
      requiredText: "Urgent Action Required",
    },
  ];

  function createData(debitDate, cover, provider, amount, status) {
    return { debitDate, cover, provider, amount, status };
  }

  const rows = [
    createData("26/02/2021", "Audi A1", "Motor Outsurance", "R1500", "pay"),
    createData("26/03/2021", "Funeral Pre", "Miway", "R1750", "pay"),
    createData("26/04/2021", "BMW 3 Series", "Motor Outsurance", "R1500", "pay"),
    createData("26/05/2021", "Audi A1", "Budget", "R1750", "pay"),
    createData("26/06/2021", "BMW 5 Series", "Miway", "R1500", "pay"),
  ];

  const handlePay = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPayment("");
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="rewards-breadcrumbs">
        <Link to="/">Main</Link>
        <Typography color="text.primary">Policies</Typography>
      </Breadcrumbs>
      <div className="rewards">
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "2px 1px 5px rgba(0,0,0,0.26)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Existing Policies" {...a11yProps(0)} />
            <Tab label="Payment History" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            {cardPolicies.map((card, index) => {
              return (
                <div
                  className="existing-policies"
                  style={{ paddingBottom: "20px" }}
                  key={index}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "left",
                      boxShadow: "2px 1px 5px rgba(0,0,0,0.26)",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{
                            width: "100px",
                            height: "100px",
                          }}
                          src={card.src}
                          alt=""
                        />
                      }
                    />
                    <CardContent>
                      <div
                        className="header-card-content"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <Typography variant="h6" sx={{ paddingRight: "10px" }}>
                          <b>{card.headerContent}</b>
                        </Typography>
                        <Typography variant="subtitle2">#{card.id}</Typography>
                      </div>
                      <div className="body-card-content">
                        <Typography variant="subtitle2" color="text.secondary">
                          {card.bodyContent}
                        </Typography>
                      </div>
                      <div
                        className="footer-card-content"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <Typography
                          variant="h6"
                          color="purple"
                          sx={{ paddingRight: "10px" }}
                        >
                          <b>{card.price}</b>
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          Per /month
                        </Typography>
                        <div
                          className="renew-button-card"
                          style={{ paddingLeft: "40px", marginTop: "5px" }}
                        >
                          <Button sx={{ color: "black" }}>
                            <Autorenew />
                            Renew
                          </Button>
                        </div>
                        <div
                          className="alert-card"
                          style={{ paddingLeft: "40px" }}
                        >
                          <Alert severity={card.typeRequired}>
                            {card.requiredText}
                          </Alert>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Table sx={{ boxShadow: "2px 1px 5px rgba(0,0,0,0.26)" }}>
              <TableHead>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Debit Date</TableCell>
                        <TableCell align="right">Cover</TableCell>
                        <TableCell align="right">provider&nbsp;</TableCell>
                        <TableCell align="right">Amount&nbsp;</TableCell>
                        <TableCell align="right">Status&nbsp;</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.debitDate}>
                          <TableCell component="th" scope="row">
                            {row.debitDate}
                          </TableCell>
                          <TableCell align="right">{row.cover}</TableCell>
                          <TableCell align="right">{row.provider}</TableCell>
                          <TableCell align="right">{row.amount}</TableCell>
                          <TableCell align="right">
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  width: 400,
                                  bgcolor: "background.paper",
                                  border: "2px solid #fff",
                                  borderRadius: "8px",
                                  boxShadow: 24,
                                  p: 4,
                                }}
                              >
                                <form>
                                  <Typography
                                    variant="h4"
                                    padding={3}
                                    textAlign="center"
                                  >
                                    Payment Summary
                                  </Typography>
                                  <Typography variant="h6" gutterBottom>
                                    Confirm and process your payment. Please
                                    enter your OTP code.
                                  </Typography>
                                  <TextField
                                    name="otp"
                                    onChange={(event) => {
                                      setPayment(event.target.value);
                                    }}
                                    value={payment}
                                    type="number"
                                    margin="normal"
                                    fullWidth
                                  />
                                  <Button sx={{ borderRadius: 3 }}>
                                    <Link
                                      to="/policies"
                                      style={{ textDecoration: "none" }}
                                    >
                                      Resend
                                    </Link>
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="contained"
                                    sx={{ borderRadius: 3, marginTop: 3 }}
                                    color="warning"
                                    fullWidth
                                    onClick={handleClose}
                                  >
                                    Pay
                                  </Button>
                                </form>
                              </Box>
                            </Modal>
                            <Button
                              sx={{ borderRadius: 2 }}
                              onClick={handlePay}
                            >
                              {row.status}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableHead>
            </Table>
          </TabPanel>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default Policies;
