import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => (
  <>
    <div style={{ marginTop: 100 }}>
      <h1>Login:</h1>
      <LoginForm />
    </div>
    <div style={{ marginTop: 100 }}>
      <h1>Register:</h1>
      <RegisterForm />
    </div>
  </>
);

export default Login;
