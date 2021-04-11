import PropTypes from 'prop-types';

const mediaUrl = 'http://media-new.mw.metropolia.fi/wbma/uploads/';

const Single = ({ location }) => {
  const file = location.state;

  return (
    <>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </>
  );
};

Single.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Single;
