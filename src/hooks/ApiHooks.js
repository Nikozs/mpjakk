/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect, useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';

const baseUrl = 'https://media-new.mw.metropolia.fi/wbma/';

// general function for fetching (options default value is empty object)
const doFetch = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if (json.error) {
    // if API response contains error message (use Postman to get further details)
    throw new Error(`${json.message}: ${json.error}`);
  } else if (!response.ok) {
    // if API response does not contain error message, but there is some other error
    throw new Error('doFetch failed');
  } else {
    // if all goes well
    return json;
  }
};

const handleRegistering = () => {
  const register = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    let response;
    try {
      response = await doFetch(`${baseUrl}users`, fetchOptions);
    } catch (e) {
      alert(e.message);
    }
    return response;
  };

  const getAvailableUser = async (username) => {
    let response;
    try {
      response = await doFetch(`${baseUrl}users/username/${username}`);
    } catch (e) {
      alert(e.message);
    }
    return response.available;
  };

  return { register, getAvailableUser };
};

const useLogin = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: inputs.username, password: inputs.password }),
    };
    let response;
    try {
      response = await doFetch(`${baseUrl}login`, fetchOptions);
      return response;
    } catch (e) {
      alert(e.message);
    }
    return response;
  };

  return { postLogin };
};

const useAllMedia = () => {
  const [data, setData] = useState([]);
  const url = `${baseUrl}media`;

  const fetchUrl = async () => {
    const response = await fetch(url);
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

const getAvatar = () => {
  const [data, setData] = useState([]);
  const [user] = useContext(MediaContext);

  // avatarurl = avatar[0].thumbnails ? uploadsUrl + avatar[0].thumbnails.w160 : '#';

  const url = user ? `${baseUrl}tags/avatar_${user.user_id}` : '';

  const fetchUrl = async () => {
    const response = await fetch(url);
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

export {
  useAllMedia, handleRegistering, useLogin, getAvatar,
};
