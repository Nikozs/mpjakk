/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

// import { useState, useEffect } from 'react';
import MediaRow from './MediaRow';
import { useAllMedia } from '../hooks/ApiHooks';

// const baseUrl = 'https://media-new.mw.metropolia.fi/wbma/';

const MediaTable = () => {
  const picArray = useAllMedia();

  console.log(picArray);

  return (
    <table>
      <tbody>
        {
        picArray.map((item, index) => <MediaRow key={index} file={item} />)
}
      </tbody>
    </table>
  );
};

export default MediaTable;
