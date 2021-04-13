/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
} from '@material-ui/core';
// import { GridListTileBar } from '@material-ui/core';

const uploadsUrl = 'https://media-new.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 240,
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

    <Card className={classes.root} style={{ margin: 10 }}>
      <CardActionArea>
        <CardMedia className={classes.media} image={file.filename ? uploadsUrl + file.filename : '#'} title={file.title} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {file.title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {file.description}
        </Typography>
      </CardContent>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img alt={file.title} width="350px" height="350px" src={uploadsUrl + file.filename} />
      </Modal>
      <CardActions>
        <Button variant="outlined" color="primary" type="button" style={{ margin: '6px' }} onClick={openModal}>View in Modal</Button>

        <Button variant="contained" color="primary" style={{ margin: '6px' }}>
          <Link
            to={{ pathname: '/single', state: file }}
            style={{ textDecoration: 'none', color: 'white', fontSize: 'medium' }}
          >
            View large
          </Link>
        </Button>
      </CardActions>
    </Card>

  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
