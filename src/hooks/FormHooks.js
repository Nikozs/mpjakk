/* eslint no-shadow: ["error", { "allow": ["inputs"] }] */
import { useState } from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
    full_name: '',
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return { inputs, handleSubmit, handleInputChange };
};

export default useForm;
