/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const uploadsUrl = 'https://media-new.mw.metropolia.fi/wbma/uploads/';

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
    <tr>
      <td>
        <img src={uploadsUrl + file.thumbnails.w160} alt={file.title} />
      </td>
      <td>
        <h3>{file.title}</h3>
        <p>{file.description}</p>
      </td>
      <td>
        <button type="button" onClick={openModal}>View</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img alt={file.title} width="350px" height="350px" src={uploadsUrl + file.filename} />
        </Modal>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
