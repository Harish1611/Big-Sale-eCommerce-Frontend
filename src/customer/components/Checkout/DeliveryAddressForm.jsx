import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../state/Order/Action";

const DeliveryAddressForm = ({ handleNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  const deliveryAddressHandler = (e) => {
    e.preventDefault();

    console.log("Address");

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log(address);
    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address: item, jwt, navigate }));
    handleNext();
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
            {auth.user?.addresses.map((item) => (
              <div
                onClick={() => setSelectedAdress(item)}
                className="p-5 py-7 border-b cursor-pointer"
              >
                {" "}
                <AddressCard address={item} />
                {selectedAddress?.id === item.id && (
                  <button
                    onClick={() => handleCreateOrder(item)}
                    className="w-full my-4 px-8 py-4 text-white border rounded-md bg-[#02376C] hover:bg-[#0859a9]"
                  >
                    Deliver Here
                  </button>
                )}
              </div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={deliveryAddressHandler}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                <button
                    className=" my-4 px-8 py-4 text-white border rounded-md bg-[#02376C] hover:bg-[#0859a9]"
                    type="submit"
                  >
                    Deliver Here
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
