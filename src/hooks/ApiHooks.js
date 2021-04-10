/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

const baseUrl = 'https://media-new.mw.metropolia.fi/wbma/';

const useAllMedia = () => {
  const [data, setData] = useState([]);
  const url = `${baseUrl}media`;
  console.log('url:', url);

  const fetchUrl = async () => {
    const response = await fetch(url);
    console.log('responssi:', response);
    const pics = await response.json();

    const media = await Promise.all(pics.map(async (item) => {
      const resp = await fetch(`${baseUrl}media/${item.file_id}`);
      return resp.json();
    }));

    setData(media);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return data;
};

export { useAllMedia };
