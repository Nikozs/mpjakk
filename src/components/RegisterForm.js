import { handleRegistering } from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';

const RegisterForm = () => {
  const { register, getAvailableUser } = handleRegistering();

  const doRegister = async (inputs) => {
    try {
      console.log('rekisteröinti lomake lähtee');
      const available = await getAvailableUser(inputs.username);
      console.log('availabale', available);
      if (available) {
        register(inputs);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doRegister);
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
      <input
        name="email"
        type="email"
        onChange={handleInputChange}
        value={inputs.email}
      />
      <input
        name="full_name"
        onChange={handleInputChange}
        value={inputs.full_name}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default RegisterForm;
