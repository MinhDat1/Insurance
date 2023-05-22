import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/TMAInsurance.png";
import img1 from "./images/TMA-logo2.png";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    job: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);
  const [recoveryPass, setRecoveryPass] = useState(" ");

  const url = "http://localhost:3001/users";
  useEffect(() => {
    async function fetchingData() {
      const res = await axios.get(url);
      if (res && res.data.length > 0) {
        setUserData(res.data);
      }
    }
    fetchingData();
  }, []);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleLogin(type) {
    const checkExist = userData.find((users) => users.email == inputs.email);
    if (type == "signup") {
      if (checkExist == undefined) {
        const res = await axios.post(
          url,
          {
            id: Math.random().toString(),
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
            job: inputs.job,
          },
          { withCredentials: true }
        );
        if (res.status == 201 || res.status == 200) {
          navigate("/dashboard");
        }
      }
    } else {
      if (checkExist != undefined) {
        const data = userData.find((x) => x.email == inputs.email);
        if (data != undefined) {
          if (data.password == inputs.password) {
            navigate("/dashboard");
          }
        }
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? handleLogin("signup") : handleLogin("login");
  };

  const handleForgotPass = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ background: "#29C282", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            float: "left",
            width: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: " 4px 2px 4px #333",
            padding: 3,
            marginLeft: 20,
            marginTop: 15,
            borderRadius: 5,
            background: "#fff",
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{" "}
          {isSignup && (
            <TextField
              name="job"
              onChange={handleChange}
              value={inputs.job}
              placeholder="Job"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          {!isSignup && (
            <Button
              onClick={handleForgotPass}
              sx={{ borderRadius: 3, marginLeft: 8 }}
            >
              Forgot Password?
            </Button>
          )}
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
                border: "2px solid #000",
                borderRadius: "25px",
                boxShadow: 24,
                p: 4,
              }}
            >
              <form>
                <Typography variant="h4" padding={3} textAlign="center">
                  Forgot Password
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Forgot your account’s password? Enter your email address and
                  we’ll send you a recovery link.
                </Typography>
                <TextField
                  name="email"
                  onChange={(event) => {
                    setRecoveryPass(event.target.value);
                  }}
                  value={recoveryPass}
                  type={"email"}
                  placeholder="Email"
                  margin="normal"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: 3, marginTop: 3 }}
                  color="warning"
                  fullWidth
                  onClick={handleClose}
                >
                  Send Recovery Email
                </Button>
              </form>
            </Box>
          </Modal>
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
      <img
        src={img1}
        alt="TMAInsurance"
        loading="lazy"
        style={{
          width: "150px",
          height: "100px",
          marginLeft: "350px",
          marginTop: "40px",
          background: "#29C282",
        }}
      />
      <Typography variant="h6" align="center">
        <b>INSURANCE</b>
      </Typography>
      <img
        src={img}
        alt="Insurance"
        loading="lazy"
        style={{
          width: "350px",
          height: "500px",
          marginLeft: "300px",
          marginTop: "40px",
          background: "#29C282",
        }}
      />
    </div>
  );
};

export default Login;
