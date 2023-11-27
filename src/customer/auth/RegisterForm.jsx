import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../state/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);

  useEffect(()=>{
    if(jwt) dispatch(getUser(jwt))

  },[jwt,auth.jwt])


  const submissionHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("user data", userData);
    dispatch(register(userData));
  };
  return (
    <div>
       <div className=" bg-white z-20 flex justify-center py-4">
        <h2 className=" text-[#0859A9] text-2xl font-serif	">Register </h2>
      </div>
      <div className=" bg-white z-20 flex justify-center">
        <hr className="text-[#EBBB0D] bg-[#EBBB0D] w-20 h-[2px] mb-6"></hr>
      </div>
      <form className=" px-8 pb-8 pt-4 sm:p-4 sm:pt-4 w-auto sm:w-full " onSubmit={submissionHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              color="info"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
              color="info"

            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              color="info"

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type="password"
              color="info"

            />
          </Grid>

          <Grid item xs={12}>
          <button
              type="submit"
              className="w-full my-4 px-8 py-4 text-white border rounded-md bg-[#0859a9] hover:bg-[#3382d1]"
            >
              Register
            </button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">Do you already have an account ?</p>
          <span
            onClick={() => navigate("/login")}
            className="pl-2 text-[#0859a9] cursor-pointer font-serif "
            
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
