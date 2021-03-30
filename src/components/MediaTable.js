/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import { useState, useEffect } from 'react';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const [picArray, setPicArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      const response = await fetch('test.json');
      const json = await response.json();
      console.log(json);
      setPicArray(json);
    };

    loadMedia();
  }, []);

  return (
    <table>
      <tbody>
        {picArray.map((item, index) => (
          <MediaRow key={index} file={item} />
        ))}
      </tbody>
    </table>
  );
};

export default MediaTable;
