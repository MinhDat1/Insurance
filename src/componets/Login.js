import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "./images/Insurance.png";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState();

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
        const res = await axios.post(url, {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSignup ? handleLogin("signup") : handleLogin("login");
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
        src={img}
        alt="Insurance"
        loading="lazy"
        style={{
          width: 530,
          height: 700,
          marginLeft: 220,
          marginTop: 20,
          background: "#29C282",
        }}
      />
    </div>
  );
};

export default Login;
