import {
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import img from "../images/pexels-francesco-ungaro-464327.jpg";
import { Image } from "@mui/icons-material";
import { Footer } from "../Partials";
import "./CSS/myAccount.css";
import { Link } from "react-router-dom";

function MyAccount() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressNumber: "",
    city: "",
    accNumber: "",
  });

  const banks = [
    { value: "agr", label: "Agribank" },
    { value: "bidv", label: "BIDV" },
    { value: "vietcom", label: "Vietcombank" },
    { value: "viettin", label: "Viettinbank" },
  ];
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  const refCommon = useRef({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    address: undefined,
    addressNumber: undefined,
    city: undefined,
    accNumber: undefined,
  });

  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errAddress, setErrAddress] = useState(false);
  const [errAddressNumber, setErrAddressNumber] = useState(false);
  const [errCity, setErrCity] = useState(false);
  const [regexPhone, setRegexPhone] = useState(false);
  const [regexEmail, setRegexEmail] = useState(false);

  // const url = "http://localhost:3001/users";
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userData, setUserData] = useState();

  useEffect(() => {
    // async function fetchingData() {
    //   const res = await axios.get(url, { withCredentials: true });
    //   if (res && res.data.length > 0) {
    //     setUserData(res.data);
    //   }
    // }

    // async function checkLogin() {
    //   const res = await axios.get(url, { withCredentials: true });
    //   if(res && res.data.loggedIn == true){
    //     setIsLoggedIn(true);
    //     setUserData(res.data);
    //   }
    // }

    // checkLogin();

    // fetchingData();

    refCommon.firstName !== undefined &&
      setErrFirstName(value.firstName.length <= 0);

    refCommon.lastName !== undefined &&
      setErrLastName(value.lastName.length <= 0);

    refCommon.email !== undefined && setErrEmail(value.email.length <= 0);

    refCommon.phone !== undefined && setErrPhone(value.phone.length <= 0);

    refCommon.address !== undefined && setErrAddress(value.address.length <= 0);

    refCommon.addressNumber !== undefined &&
      setErrAddressNumber(value.addressNumber.length <= 0);

    refCommon.city !== undefined && setErrCity(value.city.length <= 0);

    if (refCommon.phone !== undefined) {
      setRegexPhone(!/^[0-9]{10}$/.test(value.phone));
    }

    if (refCommon.email !== undefined) {
      setRegexEmail(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
      );
    }
  }, [
    value.firstName,
    value.lastName,
    value.address,
    value.email,
    value.phone,
    value.addressNumber,
    value.city,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      value.firstName.length <= 0 ||
      value.lastName.length <= 0 ||
      value.email.length <= 0 ||
      value.phone.length <= 0 ||
      value.addressNumber.length <= 0 ||
      value.address.length <= 0 ||
      value.city.length <= 0
    ) {
      setErrFirstName(true);
      setErrLastName(true);
      setErrEmail(true);
      setErrPhone(true);
      setErrAddress(true);
      setErrAddressNumber(true);
      setErrCity(true);
    } else {
      alert("Updated");
      // const url = 'http://localhost:3001/users';
      // fetch(url, {
      //   method: "PUT",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     firstName: value.firstName,
      //     lastName: value.lastName,
      //     email: value.email,
      //     phone: value.phone,
      //     address: value.address,
      //     addressNumber: value.addressNumber,
      //     city: value.city,
      //     id: Math.random().toString(),
      //   }),
      // }).then(function (res) {
      //   console.log(res);
      //   return res.json();
      // });
    }
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="myAcc-breadcrumbs">
        <Link to="/">Main</Link>
        <Typography color="text.primary">MyAccount</Typography>
      </Breadcrumbs>
      <Grid container rowSpacing={2} className="myAccount">
        <Grid item xs={8} className="myAcc-form">
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" gutterBottom paddingBottom={5}>
                <b>General Information</b>
              </Typography>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  color="primary"
                  label="First Name*"
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
                  color="primary"
                  label="Last Name*"
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
              <FormControl fullWidth sx={{ marginBottom: 4 }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  value={value.gender}
                  label="Gender"
                >
                  {genders.map((gender, index) => {
                    return (
                      <MenuItem key={index} value={gender.value}>
                        {gender.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="email"
                  color="primary"
                  label="Email*"
                  fullWidth
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
                  color="primary"
                  label="Phone*"
                  fullWidth
                  value={value.phone}
                  onChange={(e) => {
                    setValue({ ...value, phone: e.target.value });
                    refCommon.phone = e.target.value;
                  }}
                  error={errPhone || regexPhone}
                  helperText={
                    errPhone
                      ? "Please fill out this field"
                      : regexPhone && "Phone Number must have 10 number"
                  }
                />
              </Stack>
              <Typography variant="h5" gutterBottom paddingBottom={5}>
                <b>Address</b>
              </Typography>
              <Grid container spacing={2} paddingBottom={2}>
                <Grid item xs={8}>
                  <TextField
                    type="text"
                    color="primary"
                    label="Address*"
                    fullWidth
                    value={value.address}
                    onChange={(e) => {
                      setValue({ ...value, address: e.target.value });
                      refCommon.address = e.target.value;
                    }}
                    error={errAddress}
                    helperText={errAddress ? "Please fill out this field" : ""}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="number"
                    color="primary"
                    label="Number*"
                    fullWidth
                    value={value.addressNumber}
                    onChange={(e) => {
                      setValue({ ...value, addressNumber: e.target.value });
                      refCommon.addressNumber = e.target.value;
                    }}
                    error={errAddressNumber}
                    helperText={
                      errAddressNumber ? "Please fill out this field" : ""
                    }
                  />
                </Grid>
              </Grid>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  color="primary"
                  label="City*"
                  fullWidth
                  value={value.city}
                  onChange={(e) => {
                    setValue({ ...value, city: e.target.value });
                    refCommon.city = e.target.value;
                  }}
                  error={errCity}
                  helperText={errCity ? "Please fill out this field" : ""}
                />
                <FormControl fullWidth>
                  <InputLabel id="bank-select-label">Bank</InputLabel>
                  <Select
                    labelId="bank-select-label"
                    id="bank-select"
                    value={value.bank}
                    label="Bank"
                  >
                    {banks.map((bank, index) => {
                      return (
                        <MenuItem key={index} value={bank.value}>
                          {bank.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField
                  type="number"
                  color="primary"
                  label="Account Number"
                  fullWidth
                  value={value.accNumber}
                  onChange={(e) => {
                    setValue({ ...value, accNumber: e.target.value });
                  }}
                />
              </Stack>
              <Button
                variant="contained"
                type="submit"
                className="myAcc-form-button"
              >
                Save All
              </Button>
            </form>
        </Grid>
        <Grid item xs={4} className="myAcc-wrapper-card">
          {/* {isLoggedIn &&
            userData.map((data, index) => {
              return ( */}
          <Card
            className="myAcc-profile-card"
            // key={index}
          >
            <CardMedia
              component="img"
              alt=""
              image={img}
              className="myAcc-profile-img"
            />
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: red[500],
                  }}
                  aria-label="recipe"
                  className="myAcc-profile-avatar"
                >
                  D
                </Avatar>
              }
              title="User Name"
              subheader="Front-end Developer"
              className="myAcc-profile-header"
            />
            <CardContent className="myAcc-profile-content">
              <Typography
                variant="body2"
                color="text.secondary"
                className="myAcc-profile-text"
              >
                Front-end Developer - ReactJS Front-end Developer - ReactJS
                Front-end Developer - ReactJS Front-end Developer - ReactJS
                Front-end Developer - ReactJS Front-end Developer -
                ReactJSFront-end Developer - ReactJSFront-end Developer -
                ReactJSFront-end Developer - ReactJSFront-end Developer -
                ReactJS
              </Typography>
            </CardContent>
          </Card>
          {/* );
            })} */}
          <Card className="myAcc-changeImg-card">
            <CardHeader title="Select Profile Photo" />
            <CardContent>
              <Button className="myAcc-changeImg-button">
                <IconButton>
                  <Image />
                </IconButton>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  textAlign="left"
                >
                  Choose Image
                  <br />
                  JPG, GIF or PNG. Max size of 800K
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default MyAccount;
