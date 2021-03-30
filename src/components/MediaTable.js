/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import { useState, useEffect } from 'react';
import MediaRow from './MediaRow';

const baseUrl = 'https://media-new.mw.metropolia.fi/wbma/';

const MediaTable = () => {
  const [picArray, setPicArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      const response = await fetch(`${baseUrl}media`);
      const json = await response.json();
      console.log(json);
      const media = await Promise.all(json.map(async (item) => {
        console.log('file:', `${baseUrl}media/${item.file_id}`);

        const resp = await fetch(`${baseUrl}media/${item.file_id}`);
        return resp.json();
      }));

      setPicArray(media);
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
