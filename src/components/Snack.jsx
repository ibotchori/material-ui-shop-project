import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
  return (
    <Snackbar autoHideDuration={3000} open={isOpen} onClose={handleClose}>
      <Alert severity="success">Added to basket</Alert>
    </Snackbar>
  );
};

export default Snack;
