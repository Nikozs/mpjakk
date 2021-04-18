import { withRouter } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, Input, InputLabel, Button, Typography,
} from '@material-ui/core';
import useForm from '../hooks/FormHooks';
import { useLogin } from '../hooks/ApiHooks';
import { MediaContext } from '../contexts/MediaContext';

const LoginForm = ({ history }) => {
  const [user, setUser] = useContext(MediaContext);
  const { postLogin } = useLogin();

  const doLogin = async (inputs) => {
    try {
      const userdata = await postLogin(inputs);
      console.log('userdata', userdata);
      localStorage.setItem('token', userdata.token);
      setUser(userdata.user);
      history.push('/home');
    } catch (e) {
      console.log('doLogin', e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doLogin);

  console.log('LoginForm', user);

  return (
    <>
      <Typography variant="h4" style={{ color: 'black' }}>Login:</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl style={{ margin: 15 }}>
          <InputLabel htmlFor="my-input">Username:</InputLabel>
          <Input
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
          />
        </FormControl>
        <FormControl style={{ margin: 15 }}>
          <InputLabel htmlFor="my-input2">Password:</InputLabel>
          <Input
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit" style={{ margin: 15 }}>Login</Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(LoginForm);
