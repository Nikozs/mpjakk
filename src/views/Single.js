import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = ({ location }) => {
  const file = location.state;

  // const file = {}; // TODO in the next task: single media from props.location.state

  return (
    <>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </>
  );
};

// TODO in the next task: add propType for location
Single.propTypes = {
  location: PropTypes.arrayOf,
};

Single.defaultProps = {
  location: '',
};

export default Single;
