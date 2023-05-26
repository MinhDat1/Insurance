import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CSS/Rewards.css";
import { Footer } from "../Partials";

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
function Rewards() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const insuredItem = [
    { id: "1", label: "Health Insurance" },
    { id: "2", label: "Life Insurance" },
    { id: "3", label: "Disability Insurance" },
    { id: "4", label: "Auto Insurance" },
    {
      id: "5",
      label: "Homeowners and Renters Insurance",
    },
  ];

  const claimFor = [
    { id: "1", label: "Person" },
    { id: "2", label: "Animals" },
    { id: "3", label: "Car" },
    { id: "4", label: "Money" },
    { id: "5", label: "House" },
    { id: "6", label: "Household Items" },
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onCancel = () => {
    setValue(0);
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="rewards-breadcrumbs">
        <Link to="/">Main</Link>
        <Typography color="text.primary">Rewards</Typography>
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
            <Tab label="Motor Policy" {...a11yProps(0)} />
            <Tab label="Funeral Policy" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <form>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <Autocomplete
                  disablePortal
                  options={insuredItem}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Insured Item" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={claimFor}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Claim for" />
                  )}
                />
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
                  placeholder="Accident Address*"
                  fullWidth
                  sx={{ mb: 4 }}
                  multiline
                  minRows={4}
                />
                <TextField
                  type="text"
                  placeholder="How did the accident happen?*"
                  fullWidth
                  sx={{ mb: 4 }}
                  multiline
                  minRows={4}
                />
              </Stack>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  label="I confirm that the information that I have supplied is true, and understand any mis-information may effect the outcome of my claim"
                />
              </FormGroup>
              <Box display="flex" flexDirection="row" justifyContent="right">
                <Button
                  variant="contained"
                  type="button"
                  className="rewards-button-cancel"
                  onClick={onCancel}
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

          <TabPanel value={value} index={1}>
            <form>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <Autocomplete
                  disablePortal
                  options={insuredItem}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select a loved one covered by your funeral policy"
                    />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={claimFor}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Claim for" />
                  )}
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <FormControl fullWidth>
                  <DatePicker
                    onChange={onChange}
                    style={{ height: "50px", border: "1px solid black" }}
                    placeholder="Date of Death"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TimePicker
                    onChange={onChange}
                    style={{ height: "50px", border: "1px solid black" }}
                    placeholder="Time of Death"
                  />
                </FormControl>
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  placeholder="would you like provide any additional information?"
                  fullWidth
                  sx={{ mb: 4 }}
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
                  control={<Checkbox color="success" />}
                  label="I acknowledge that the funds will be paid into the account John Smith "
                />
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  label="I confirm that the information that I have supplied is true, understand that any mis-information may effect the outcome of my claim"
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

export default Rewards;
