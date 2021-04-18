import { Button, Grid } from '@material-ui/core';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [toggle, setToggle] = useState(true);

  const showHide = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Grid container style={{ border: 'solid 2px', borderRadius: 7, backgroundColor: 'white' }}>
        <div style={{ margin: 100 }}>
          { toggle ? <LoginForm /> : <RegisterForm setToggle={setToggle} /> }
        </div>
      </Grid>

      <Button variant="contained" color="secondary" style={{ color: 'black', margin: 15 }} onClick={showHide}>{toggle ? 'or register' : 'or login'}</Button>
    </>
  );
};
export default Login;
