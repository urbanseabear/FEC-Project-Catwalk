import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import ModalStarRating from './ModalStarRating';
import ModalRadioList from './ModalRadioList';

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
    width: '1000px',
    height: '600px',
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
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <h2>Write Your Review</h2>
                <span>About the 'product name'</span>
                <div style={{ marginTop: '20px' }}>
                  <TextareaAutosize
                    minLength='1'
                    maxLength='60'
                    placeholder='“Example: Best purchase ever!”'
                    style={{
                      width: '500px',
                      height: '40px',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '15px',
                    }}
                  />
                  <TextareaAutosize
                    minLength='50'
                    maxLength='1000'
                    placeholder='“Why did you like the product or not?”'
                    style={{
                      width: '500px',
                      height: '300px',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '15px',
                    }}
                  />
                </div>
                <h3>Would you recommend this product?</h3>
                <form>
                  <div className='radio'>
                    <label>
                      <input type='radio' value='option1' checked={true} />
                      Yes
                    </label>
                  </div>
                  <div className='radio'>
                    <label>
                      <input type='radio' value='option1' checked={true} />
                      No
                    </label>
                  </div>
                </form>
              </Grid>
              <Grid item xs={5}>
                <h2>Overall Rating *</h2>
                <ModalStarRating />
                <h2>Characteristics *</h2>
                <ModalRadioList metaData={metaData} />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
