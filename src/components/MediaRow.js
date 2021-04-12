/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const uploadsUrl = 'https://media-new.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const MediaRow = ({ file }) => {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container style={{ border: 'solid 2px', borderRadius: '8px' }}>
          <Grid item>
            <img className={classes.img} src={file.thumbnails ? uploadsUrl + file.thumbnails.w160 : '#'} alt={file.title} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>

              <Typography gutterBottom variant="subtitle1">
                {file.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {file.description}
              </Typography>
            </Grid>
          </Grid>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <img alt={file.title} width="350px" height="350px" src={uploadsUrl + file.filename} />
          </Modal>

          <Grid item containe style={{ margin: '6px' }} r>
            <Button variant="outlined" color="primary" type="button" style={{ margin: '6px' }} onClick={openModal}>View in Modal</Button>

            <Button variant="contained" color="primary" style={{ margin: '6px' }}>
              <Link
                to={{ pathname: '/single', state: file }}
                style={{ textDecoration: 'none', color: 'white', fontSize: 'medium' }}
              >
                View large
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>

  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
