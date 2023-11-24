import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RegisterForm from "./RegisterForm";
import { useEffect, useState } from "react";
import Login from "./Login";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  margin: "20px"
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  const navigate=useNavigate()
  useEffect(() => {
    if (auth.user){
       handleClose();
       
      }
  }, [auth.user]);
  return (
    <>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
      className=" bg-transparent "
    >
      <div  className="rounded-md   ml-6 mr-6 sm:m-2   ">
      <Box className=" " sx={style}>
        {location.pathname === "/login" ? (
          <Login />
        ) : (
          <RegisterForm />
        )}
      </Box>
      </div>
    </Modal>

    
    
    </>
    
  );
}
