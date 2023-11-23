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
    >
      <Box className="rounded-md" sx={style}>
        {location.pathname === "/login" ? (
          <Login />
        ) : (
          <RegisterForm />
        )}
      </Box>
    </Modal>
    
    </>
    
  );
}
