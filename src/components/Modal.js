import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Container } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Form from "./Form/Form";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #2f303a8f",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    position: "absolute",
    overflow: "scroll",
    height: "80%",
    display: "block",
    width: "80%",
    maxWidth: "900px"
  }
  
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Container>
              <Form />
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
