import { Grid, Typography } from '@material-ui/core';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => (
  <>
    <Grid container style={{ border: 'solid 2px', borderRadius: 7, backgroundColor: 'white' }}>
      <div style={{ margin: 100 }}>
        <Typography variant="h4" style={{ color: 'black' }}>Login:</Typography>
        <LoginForm />
      </div>
    </Grid>

    <Grid
      container
      style={{
        boxShadow: 4, marginTop: '40px', borderRadius: 7, backgroundColor: 'white',
      }}
    >
      <div style={{ margin: 100 }}>
        <Typography variant="h4" style={{ color: 'black' }}>Register:</Typography>
        <RegisterForm />
      </div>
    </Grid>
  </>
);

export default Login;
