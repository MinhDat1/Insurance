import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import img from "../images/TMA.png";
import { ArrowRightAlt } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import Footer from "../Partials/Footer/Footer";
import "./CSS/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const checkboxList = [
    { id: 1, value: "phone", label: "Phone" },
    { id: 2, value: "email", label: "Email" },
    { id: 3, value: "text", label: "Text" },
    { id: 4, value: "videoCall", label: "Video Call" },
  ];

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const refCommon = useRef({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phoneNumber: undefined,
    message: undefined,
  });

  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const [regexPhone, setRegexPhone] = useState(false);
  const [regexEmail, setRegexEmail] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/employees");
      const data = await res.json();
      setEmployees(data);
    };
    fetchData();

    refCommon.firstName !== undefined &&
      setErrFirstName(value.firstName.length <= 0);

    refCommon.lastName !== undefined &&
      setErrLastName(value.lastName.length <= 0);

    refCommon.email !== undefined && setErrEmail(value.email.length <= 0);

    refCommon.phoneNumber !== undefined &&
      setErrPhoneNumber(value.phoneNumber.length <= 0);

    refCommon.message !== undefined && setErrMessage(value.message.length <= 0);

    if (refCommon.phoneNumber !== undefined) {
      setRegexPhone(!/^[0-9]{10}$/.test(value.phoneNumber));
    }

    if (refCommon.email !== undefined) {
      setRegexEmail(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
      );
    }
  }, [
    value.firstName,
    value.lastName,
    value.email,
    value.phoneNumber,
    value.message,
    value.checkbox,
  ]);

  const arrayChecked = [];
  const [isValidCheckbox, setIsValidCheckbox] = useState();

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      value.firstName.length <= 0 ||
      value.lastName.length <= 0 ||
      value.email.length <= 0 ||
      value.phoneNumber.length <= 0 ||
      value.message.length <= 0
    ) {
      setErrFirstName(true);
      setErrLastName(true);
      setErrEmail(true);
      setErrPhoneNumber(true);
      setErrMessage(true);
    } else {
      alert("Successfully");
      let url = "http://localhost:3001/contact";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          phoneNumber: value.phoneNumber,
          message: value.message,
          id: Math.random().toString(),
        }),
      }).then(function (res) {
        console.log(res);
        return res.json();
      });

      setValue({
        ...value,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      refCommon.firstName = undefined;
      refCommon.lastName = undefined;
      refCommon.email = undefined;
      refCommon.phoneNumber = undefined;
      refCommon.message = undefined;
    }
    setIsValidCheckbox(false);
  };
  const handleChangeCheckBox = (cb) => {
    if (cb.target.checked == true) {
      arrayChecked.push(cb.target.value);
    } else {
      let index = arrayChecked.indexOf(cb.target.value);
      console.log(index);
      if (index > -1) {
        arrayChecked.splice(index, 1);
      }
    }
    console.log(arrayChecked);

    if (arrayChecked.length <= 0) {
      setIsValidCheckbox(false);
    } else {
      setIsValidCheckbox(true);
    }
    console.log(isValidCheckbox);
  };
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="contact-breadcrumbs">
        <Link to="/">Main</Link>
        <Typography color="text.primary">Contact</Typography>
      </Breadcrumbs>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="contact"
      >
        <Grid item xs={6} className="contact-info">
          <Typography variant="h3" gutterBottom>
            <b>Get in Touch</b>
          </Typography>
          <Typography gutterBottom>
            Have a question? Concern? Request? We'd love to hear from you.
            Connect with us through the following ways.
          </Typography>
          <Typography variant="h6">Address: </Typography>
          <Typography>31 Hayward St, Ste J</Typography>
          <Typography gutterBottom>Franklin, MA 02038 </Typography>
          <Typography variant="h6">Phone: </Typography>
          <Typography gutterBottom> 508-528-5200 </Typography>
          <Typography variant="h6">Fax</Typography>
          <Typography gutterBottom>508-520-6914</Typography>
          <Typography variant="h6">Email:</Typography>
          <Typography gutterBottom>
            <Link to="/">ContactUs@tma.com</Link>
          </Typography>
          <Typography variant="h6">Text: </Typography>
          <Typography gutterBottom> 508-528-5200 </Typography>
          <Typography variant="h6"> 24-hour emergency claims line: </Typography>
          <Typography gutterBottom> 508-528-5200 </Typography>
          <Typography variant="h6">Online chat: </Typography>
          <Typography>
            {" "}
            Located at bottom right corner of our website{" "}
          </Typography>
          <Typography gutterBottom>
            (you'll be chatting with our Director)
          </Typography>
          <Typography variant="h6"> Video chat: </Typography>
          <Typography gutterBottom>
            {" "}
            Contact us to set up a video appointment{" "}
          </Typography>
          <Typography variant="h6">Hours: </Typography>
          <Typography gutterBottom>
            {" "}
            8 a.m. to 4 p.m., Monday-Friday{" "}
          </Typography>
          <Typography variant="h6">Social: </Typography>
          <Typography gutterBottom>
            Connect with us on <Link to="https://facebook.com">Facebook</Link>{" "}
            or <Link to="https://LinkedIn.com">LinkedIn</Link>
          </Typography>
        </Grid>
        <Grid item xs={6} className="contact-form">
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
              <b>
                Fill out out this short form and a member of our team will get
                back to you within 24 hours
              </b>
            </Typography>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                placeholder="First Name*"
                fullWidth
                value={value.firstName}
                onChange={(e) => {
                  setValue({ ...value, firstName: e.target.value });
                  refCommon.firstName = e.target.value;
                }}
                error={errFirstName}
                helperText={errFirstName ? "Please fill out this field" : ""}
              />
              <TextField
                type="text"
                placeholder="Last Name*"
                fullWidth
                value={value.lastName}
                onChange={(e) => {
                  setValue({ ...value, lastName: e.target.value });
                  refCommon.lastName = e.target.value;
                }}
                error={errLastName}
                helperText={errLastName ? "Please fill out this field" : ""}
              />
            </Stack>
            <TextField
              type="email"
              placeholder="Email*"
              fullWidth
              sx={{ mb: 4 }}
              value={value.email}
              onChange={(e) => {
                setValue({ ...value, email: e.target.value });
                refCommon.email = e.target.value;
              }}
              error={errEmail || regexEmail}
              helperText={
                errEmail
                  ? "Please fill out this field"
                  : regexEmail &&
                    "Please include an '@[a-zA-z].[a-zA-Z]' in email address"
              }
            />
            <TextField
              type="tel"
              placeholder="Phone Number*"
              fullWidth
              sx={{ mb: 4 }}
              value={value.phoneNumber}
              onChange={(e) => {
                setValue({ ...value, phoneNumber: e.target.value });
                refCommon.phoneNumber = e.target.value;
              }}
              error={errPhoneNumber || regexPhone}
              helperText={
                errPhoneNumber
                  ? "Please fill out this field"
                  : regexPhone && "Phone Number must have 10 number"
              }
            />
            <TextField
              type="text"
              placeholder="Message*"
              fullWidth
              sx={{ mb: 4 }}
              value={value.message}
              onChange={(e) => {
                setValue({ ...value, message: e.target.value });
                refCommon.message = e.target.value;
              }}
              error={errMessage}
              helperText={errMessage ? "Please fill out this field" : ""}
              multiline
              minRows={4}
            />
            <Typography gutterBottom>
              {" "}
              How do you prefer to communicate with us?
            </Typography>
            <FormGroup>
              {checkboxList &&
                checkboxList.map((checkbox, index) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="success"
                          value={checkbox.value}
                          onChange={(checkbox) => {
                            handleChangeCheckBox(checkbox);
                          }}
                        />
                      }
                      label={checkbox.label}
                      key={index}
                    />
                  );
                })}
              {!isValidCheckbox && <span>Please check this field</span>}
            </FormGroup>
            <Button
              variant="contained"
              type="submit"
              className="contact-form-button"
            >
              Contact Us
            </Button>
          </form>
        </Grid>
        <Grid item xs={6} className="contact-img">
          <img src={img} alt="" loading="lazy" />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" gutterBottom>
              <b>How to find us?</b>
            </Typography>
            <Typography gutterBottom>
              From 495, take exit 43 (formerly exit #17) and merge onto MA-140
              S/W. Central Street heading toward Franklin.
              <br />
              <br />
              Turn right onto Hayward Street. After a few hundred yards, use the
              second entrance on the right to enter Moseley Mill (just after the
              granite sign).
              <br />
              <br />
              Drive all the way down until you see a building located on your
              left. We are located on the first floor in the back half of the
              building our door is on the left just under the Berry Insurance
              sign.
              <br />
              <br />
              If you continue driving towards the railroad tracks and fence you
              can turn left and find some additional dedicated parking spots for
              clients/visitors behind the building.
            </Typography>
            <Button variant="contained" type="submit" className="contact-map">
              <Link to="https://www.google.com/maps/place/12+%C4%90%E1%BA%A1i+l%E1%BB%99+Khoa+h%E1%BB%8Dc,+khu+v%E1%BB%B1c+2,+Th%C3%A0nh+ph%E1%BB%91+Qui+Nh%C6%A1n,+B%C3%ACnh+%C4%90%E1%BB%8Bnh,+Vi%E1%BB%87t+Nam/@13.7173919,109.2082395,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6d40316f51bd:0x16c164ce4c7de74e!8m2!3d13.7173919!4d109.2108144!16s%2Fg%2F11s9k054yv?hl=vi-VN">
                Get Direction
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} className="contact-group-card">
          <Typography variant="h3" gutterBottom>
            <b>Looking for someone specific?</b>
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap="2rem"
            position="relative"
            padding="20px"
          >
            {employees.map((employee, index) => {
              return (
                <Card className="contact-card" key={index}>
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                    }}
                    className="contact-avatar"
                  />
                  <Typography variant="h6" gutterBottom>
                    <b>
                      {employee.lastName}
                      {employee.firstName}
                    </b>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {employee.position}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    E: <Link to="https://gmail.com.vn">{employee.email}</Link>
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    P: {employee.phoneNumber}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    <Link to="/">
                      <b>
                        Get to Know more <ArrowRightAlt />
                      </b>{" "}
                    </Link>
                  </Typography>
                </Card>
              );
            })}
          </Box>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default Contact;
