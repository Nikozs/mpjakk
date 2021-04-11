import { withRouter } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
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
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleInputChange}
        value={inputs.username}
      />
      <input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(LoginForm);
