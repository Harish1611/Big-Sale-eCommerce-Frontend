import React from "react";
import { Grid, TextField } from "@mui/material";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

const Contact = () => {

  const submissionHandler = () => {

  }
  return (
    <div className=" bg-gray-100">
      <Grid container className="px-5 py-14 sm:px-12 sm:py-24">
        <Grid item sx={12} lg={6}>
          <div>
            <div className="flex-col items-start">
              <h3 className="text-[#0859a9] text-2xl font-serif">
                You Tell Us! We Listen!
              </h3>
              <hr className=" bg-[#EBBB0D] w-20 h-[2px] mt-2"></hr>
            </div>
            <div className="flex flex-wrap items-start pt-8">
              <BusinessRoundedIcon style={{ color: "#0859a9" }} />
              <div className="ml-2">
                <h4 className="text-gray-950 text-lg font-serif ">
                  Big Sale - eCom Headquarters​:
                </h4>
                <p className="text-gray-500 py-2">
                  157, Zen Tech Apartment, Forjet Hill Road, Hi-Tech City,
                  Hyderabad: 500026
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-start pt-2">
              <SupportAgentRoundedIcon style={{ color: "#0859a9" }} />
              <div className="ml-2">
                <h4 className=" text-gray-950 text-lg font-serif">
                  Support Team:
                </h4>

                <p className=" text-gray-500 py-2">+91 929292929292</p>
              </div>
            </div>

            <div className="flex flex-wrap items-start pt-2">
            <AlternateEmailRoundedIcon style={{ color: "#0859a9" }} />

              <div className="ml-2">
                <h4 className=" text-gray-950 text-lg font-serif  ">
                  Email:
                </h4>

                <p className=" text-gray-500 py-2">support@bigsale.in</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} lg={6} className="">

          <div className="border shadow-md rounded-md bg-white p-2 pt-6 mt-8 sm:mt-0 sm:p-4">
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

          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              autoComplete="tel"
              color="info"

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              color="info"

            />
          </Grid>

          <Grid item xs={12}>
          <button
              type="submit"
              className="w-full sm:w-auto my-4 px-8 py-4 text-white border rounded-md bg-[#0859a9] hover:bg-[#3382d1]"
            >
              Send
            </button>
          </Grid>
        </Grid>
      </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
