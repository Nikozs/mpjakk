import { Grid } from '@material-ui/core';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => (
  <>
    <Grid container style={{ border: 'solid 2px', borderRadius: 7 }}>
      <div style={{ margin: 100 }}>
        <h1>Login:</h1>
        <LoginForm />
      </div>
    </Grid>

    <Grid container style={{ border: 'solid 2px', marginTop: '40px', borderRadius: 7 }}>
      <div style={{ margin: 100 }}>
        <h1>Register:</h1>
        <RegisterForm />
      </div>
    </Grid>
  </>
);

export default Login;
