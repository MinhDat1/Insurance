import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./images/TMAInsurance.png";
import img1 from "./images/TMA-logo2.png";
import { loginUser, useAuthDispatch, useAuthState } from "../store";
import { green } from "@mui/material/colors";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    job: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [open, setOpen] = useState(false);
  const [recoveryPass, setRecoveryPass] = useState(" ");
  const data = useAuthState();

  useEffect(() => {
    if (data.message == "Success") {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [data]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useAuthDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginUser(dispatch, { email: inputs.email, password: inputs.password });
  };

  const handleForgotPass = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRecoveryPass("");
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
            boxShadow: " 4px 2px 4px rgba(0,0,0,0.55)",
            padding: 3,
            marginLeft: 20,
            marginTop: 15,
            borderRadius: "8px",
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
                  type="button"
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: 3, marginTop: 3 }}
              color="warning"
            >
              Submit
            </Button>
            {!isSignup && data.loading == true && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  marginTop: "-3px",
                  marginLeft: "55px",
                }}
              />
            )}
          </div>
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
