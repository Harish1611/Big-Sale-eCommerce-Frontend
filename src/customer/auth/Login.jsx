import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../state/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("login user", userData);

    dispatch(login(userData));
  };

  return (
    <div>
      <div className=" bg-white z-20 flex justify-center py-4">
        <h2 className=" text-[#0859A9] text-2xl font-serif	">Login </h2>
      </div>
      <div className=" bg-white z-20 flex justify-center">
        <hr className="text-[#EBBB0D] bg-[#EBBB0D] w-20 h-[2px] mb-6"></hr>
      </div>
      <form className=" px-8 pb-8 pt-4  w-auto sm:w-full " onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
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
              autoComplete="given-name"
              type="password"
              color="info"

            />
          </Grid>

          <Grid item xs={12}>
            <button
              type="submit"
              className="w-full my-4 px-8 py-4 text-white border rounded-md bg-[#0859a9] hover:bg-[#3382d1]"
            >
              Login
            </button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">If you don't have an account ?</p>
          <span
            onClick={() => navigate("/register")}
            className="pl-2 text-[#0859a9] cursor-pointer font-serif "
            
          >
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
