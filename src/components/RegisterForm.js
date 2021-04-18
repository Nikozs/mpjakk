import {
  Button, Typography, Grid,
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { handleRegistering } from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';

const RegisterForm = ({ setToggle }) => {
  const { register, getAvailableUser } = handleRegistering();
  const validators = {
    username: ['required', 'minStringLength: 3', 'isAvailable'],
    password: ['required', 'minStringLength:5'],
    confirm: ['required', 'isPasswordMatch'],
    email: ['required', 'isEmail'],
    // eslint-disable-next-line max-len
    full_name: ['matchRegexp:^[a-zA-ZåäöÅÄÖ]+(([\',. -][a-zA-ZåäöÅÄÖ ])?[a-zA-ZåäöÅÄÖ]*)*$'],
  };

  const errorMessages = {
    username: ['vaadittu kenttä', 'vähintään 3 merkkiä', 'tunnus ei oo vapaa'],
    password: ['vaadittu kenttä', 'vähintään 5 merkkiä'],
    confirm: ['vaadittu kenttä', 'salasanat eivät täsmää'],
    email: ['vaadittu kenttä', 'sähköposti väärää muotoa'],
    full_name: ['vain kirjamia'],
  };

  const doRegister = async (inputs) => {
    try {
      console.log('rekisteröinti lomake lähtee');
      const available = await getAvailableUser(inputs.username);
      console.log('availabale', available);
      if (available) {
        // eslint-disable-next-line no-param-reassign
        delete inputs.confirm;
        const result = await register(inputs);
        if (result.message.length > 0) {
          // eslint-disable-next-line no-alert
          alert(result.message);
          setToggle(true);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doRegister);

  useEffect(() => {
    // eslint-disable-next-line
    ValidatorForm.addValidationRule('isAvailable', async (value) => {
      if (value.length > 2) {
        try {
          const available = await getAvailableUser(value);
          console.log('onk vapaana', available);
          return available;
        } catch (e) {
          console.log(e.message);
          return true;
        }
      }
    });

    ValidatorForm.addValidationRule('isPasswordMatch',
      (value) => (value === inputs.password));
  }, [inputs]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
          >
            Register

          </Typography>
        </Grid>
        <Grid item xs={12}>

          <ValidatorForm onSubmit={handleSubmit}>
            <Grid container>
              <Grid container item>
                <TextValidator
                  fullWidth
                  type="text"
                  name="username"
                  label="Username"
                  onChange={handleInputChange}
                  value={inputs.username}
                  validators={validators.username}
                  errorMessages={errorMessages.username}
                />
              </Grid>

              <Grid container item>
                <TextValidator
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  onChange={handleInputChange}
                  value={inputs.password}
                  validators={validators.password}
                  errorMessages={errorMessages.password}
                />
              </Grid>

              <Grid container item>
                <TextValidator
                  fullWidth
                  type="password"
                  name="confirm"
                  label="Confirm password"
                  onChange={handleInputChange}
                  value={inputs.confirm || ''}
                  validators={validators.confirm}
                  errorMessages={errorMessages.confirm}
                />
              </Grid>

              <Grid container item>
                <TextValidator
                  fullWidth
                  type="email"
                  name="email"
                  label="Email"
                  onChange={handleInputChange}
                  value={inputs.email}
                  validators={validators.email}
                  errorMessages={errorMessages.email}
                />
              </Grid>

              <Grid container item>
                <TextValidator
                  fullWidth
                  type="text"
                  name="full_name"
                  label="Full name"
                  onChange={handleInputChange}
                  value={inputs.full_name}
                  validators={validators.full_name}
                  errorMessages={errorMessages.full_name}
                />
              </Grid>

              <Grid container item>
                <Button
                  fullWidth
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
};

RegisterForm.propTypes = {
  setToggle: PropTypes.func.isRequired,
};

export default RegisterForm;
