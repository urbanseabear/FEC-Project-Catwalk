import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import ModalStarRating from './ModalStarRating';
import ModalRadioList from './ModalRadioList';
import RecommendRadioBtn from './RecommendRadioBtn';
import ReviewTextArea from './ReviewTextArea';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #eeeeee',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    width: '1200px',
    height: '650px',
  },
}));

export default function AnimatedModal({ metaData }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ fontSize: '25px' }}
        variant='contained'
        onClick={() => handleOpen()}>
        ADD A REVIEW +
      </Button>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <ReviewTextArea />
              </Grid>
              <Grid item xs={6}>
                <div style={{ float: 'right' }}>
                  <h2>Overall Rating *</h2>
                  <ModalStarRating />
                </div>
                <h2>Characteristics *</h2>
                <ModalRadioList metaData={metaData} />
                <div style={{ marginTop: '130px' }}>
                  <RecommendRadioBtn />
                  <Button
                    style={{
                      fontSize: '20px',
                      marginTop: '-45px',
                      float: 'right',
                    }}
                    variant='contained'
                    onClick={() => handleClose()}>
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
