/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const MediaTable = ({ picArray }) => (
  <table>
    <tbody>
      {picArray.map((item, index) => (
        <MediaRow key={index} file={item} />
      ))}
    </tbody>
  </table>
);

MediaTable.propTypes = {
  picArray: PropTypes.array.isRequired,
};

export default MediaTable;
