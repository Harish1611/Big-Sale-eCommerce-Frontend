import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <Grid
        className="bg-slate-400 text-white mt-10 text-center"
        container
        color={"white"}
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <img src={logo} alt="logo" className="h-15 px-20" />
          <p className="text-slate-500 pb-10">Explore, Admire & Purchase</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Company
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            About
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Blog
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Jobs
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Press
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Partners
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Solutions
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Marketing
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Analytics
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Commerce
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Insights
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Support
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Legal
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Claim
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Privacy
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Terms
          </Typography>
        </Grid>
      </Grid>
      <hr></hr>
      <Grid
        className="bg-black text-white  text-center"
        container
        color={"white"}
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Big Sale | All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" component="p" align="center">
            Site Designed & Developed By
            <Link
              href="https://portfolio-website-react-eta.vercel.app/"
              color="inherit"
              underline="always"
              style={{ color: "blue" }}
            >
              {" "}
              Harish N Bonam
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
