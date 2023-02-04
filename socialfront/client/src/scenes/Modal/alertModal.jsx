import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModalClose } from '../../state';

export default function AlertDialog(props) {
    const dispatch = useDispatch()
    const alertMessages = useSelector((state) => state?.alertMessage);
    const alertModalOpen = useSelector((state) => state?.setOpenAlertModal);

    console.log(alertModalOpen,"alert")
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    dispatch(setAlertModalClose())
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={alertModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {alertMessages || "N/A"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}