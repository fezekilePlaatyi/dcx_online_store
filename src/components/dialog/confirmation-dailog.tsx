import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

export interface ConfirmationOptions {
  catchOnCancel?: boolean;
  variant?: "danger" | "info" | "component";
  title?: string;
  component?: React.ReactNode;
  description?: string;
}

interface ConfirmationDialogProps extends ConfirmationOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  variant,
  description,
  component,
  onSubmit,
  onClose,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <DialogContent>
            {component}
        </DialogContent>
      </DialogContent>
      <DialogActions>
        {variant === "danger" && (
          <>
            <Button color="primary" onClick={onSubmit}>
              Yes, I agree
            </Button>
            <Button color="primary" onClick={onClose} autoFocus>
              CANCEL
            </Button>
          </>
        )}

        {(variant === "info" || variant === "component") && (
          <Button color="primary" onClick={onSubmit}>
            OK
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
