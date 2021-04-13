import { Button, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const mediaUrl = 'http://media-new.mw.metropolia.fi/wbma/uploads/';

const Single = ({ location }) => {
  const file = location.state;

  return (
    <>
      <Card>
        <h1>{file.title}</h1>
        <img src={mediaUrl + file.filename} alt={file.title} />
        <Button variant="contained" color="primary" style={{ margin: '6px' }}>
          <Link
            to={{ pathname: '/', state: file }}
            style={{ textDecoration: 'none', color: 'white', fontSize: 'medium' }}
          >
            <ArrowBackIcon />
            Go back
          </Link>
        </Button>
      </Card>
    </>
  );
};

Single.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Single;
