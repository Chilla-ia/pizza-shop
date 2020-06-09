import { arrayOf, node, bool, func, string, shape } from "prop-types";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

export default function Popin({ open, title, children, actions }) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map(({ label, onClick, primary }) => (
          <Button
            key={label}
            color={primary ? "primary" : "secondary"}
            onClick={onclick}
          >
            {label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

Popin.propTypes = {
  open: bool,
  title: string,
  children: node.isRequired,
  actions: arrayOf(
    shape({
      label: string,
      onClick: func,
      primary: bool,
    })
  ),
};

Popin.defaultProps = {
  open: false,
  title: null,
  actions: [],
};
