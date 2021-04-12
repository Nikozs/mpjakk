import {
  FormControl, Input, InputLabel, Button,
} from '@material-ui/core';
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
      <FormControl style={{ margin: 15 }}>
        <InputLabel htmlFor="my-input">Username:</InputLabel>
        <Input
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
      </FormControl>
      <FormControl style={{ margin: 15 }}>
        <InputLabel htmlFor="my-input">Password:</InputLabel>
        <Input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
      </FormControl>
      <FormControl style={{ margin: 15 }}>
        <InputLabel htmlFor="my-input">Email:</InputLabel>
        <Input
          name="email"
          type="email"
          onChange={handleInputChange}
          value={inputs.email}
        />
      </FormControl>
      <FormControl style={{ margin: 15 }}>
        <InputLabel htmlFor="my-input">Full name:</InputLabel>
        <Input
          name="full_name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
      </FormControl>
      <Button type="submit" style={{ margin: 15 }}>Submit</Button>
    </form>
  );
};
export default RegisterForm;
