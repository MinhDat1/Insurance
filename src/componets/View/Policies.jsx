import React, { useState } from "react";
import "./CSS/Policies.css";
import PropTypes from "prop-types";
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import { Footer } from "../Partials";
import Tables from "./Table";


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
          <Typography>{children}</Typography>
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const insuredItem = [
    { id: "1", value: "health", name: "Health Insurance" },
    { id: "2", value: "life", name: "Life Insurance" },
    { id: "3", value: "disability", name: "Disability Insurance" },
    { id: "4", value: "auto", name: "Auto Insurance" },
    {
      id: "5",
      value: "homeowners and renters",
      name: "Homeowners and Renters Insurance",
    },
  ];

  const claimFor = [
    { id: "1", value: "person", name: "Person" },
    { id: "2", value: "animals", name: "Animals" },
    { id: "3", value: "car", name: "Car" },
    { id: "4", value: "money", name: "Money" },
    { id: "5", value: "house", name: "House" },
    { id: "6", value: "householdItems", name: "Household Items" },
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
            borderRadius: "25px",
            boxShadow: "1px 2px 2px rgba(0,0,0,0.26)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Insurance Policy" {...a11yProps(0)} />
            <Tab label="Funeral Policy" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Tables />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <form>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="select-label">
                    Selected Insured Item
                  </InputLabel>
                  <Select
                    value={value.insuredItem}
                    label="Selected Insured Item"
                  >
                    {insuredItem.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Claim For</InputLabel>
                  <Select value={value.claimFor} label="Claim For">
                    {claimFor.map((claim, index) => {
                      return (
                        <MenuItem key={index} value={claim.value}>
                          {claim.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <FormControl fullWidth>
                  <DatePicker
                    onChange={onChange}
                    style={{ height: "50px" }}
                    placeholder="Incident Date"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TimePicker
                    onChange={onChange}
                    style={{ height: "50px" }}
                    placeholder="Incident Time"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  color="success"
                  label="Message*"
                  fullWidth
                  sx={{ mb: 4 }}
                  // value={value.message}
                  // onChange={(e) => {
                  //   setValue({ ...value, message: e.target.value });
                  //   refCommon.message = e.target.value;
                  // }}
                  // error={errMessage}
                  // helperText={errMessage ? "Please fill out this field" : ""}
                  multiline
                  minRows={4}
                />
                <Card className="rewards-card-select">
                  <CardHeader subheader="No death certificate could be retrieved, please kindly upload the death certificate for this claim." />
                  <Stack spacing={20} direction="row">
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        * Only JPG, PNG, PDF files are supported.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Maximum file size is 3MB
                      </Typography>
                    </CardContent>

                    <Button
                      variant="filled"
                      type="submit"
                      className="rewards-button-select"
                    >
                      Select File
                    </Button>
                  </Stack>
                </Card>
              </Stack>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      // value={checkbox.value}
                      // onChange={(checkbox) => {
                      //   handleChangeCheckBox(checkbox);
                      // }}
                    />
                  }
                  label="I confirm that the information that I have supplied is true, and understand any mis-information may effect the outcome of my claim"
                />
              </FormGroup>
              <Box display="flex" flexDirection="row" justifyContent="right">
                <Button
                  variant="contained"
                  type="submit"
                  className="rewards-button-cancel"
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  className="rewards-button-submit"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </TabPanel>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default Policies;
