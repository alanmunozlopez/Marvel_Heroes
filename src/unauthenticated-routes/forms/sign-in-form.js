import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import validationSignUpForm from './shared/validation-sign-up-form';

const textField = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={
          !!(props.input.name === 'password' || props.input.name === 'confirmacion')
        }
      onBlur={props.input.onBlur}
    />
    <View style={styles.line} />
    {
      props.meta.touched &&
      props.meta.error &&
      <Text style={styles.errors}> {props.meta.error} </Text>
    }
  </View>
);

// const validate = (values) => {
//   const errors = {};
//   if (!values.correo) {
//     errors.correo = 'requerido';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
//     errors.correo = 'correo invalido';
//   }

//   if (!values.password) {
//     errors.password = 'requerido';
//   } else if (values.password.length < 5) {
//     errors.password = 'deben ser al menos 5 caracteres';
//   } else if (values.password.length > 15) {
//     errors.password = 'debe ser menor de 15 caracteres';
//   }
//   return errors;
// };

const validate = values => validationSignUpForm(values);

const SignInForm = props => (
  <View>
    <Field
      name="email"
      component={textField}
      ph="email"
    />
    <Field
      name="password"
      component={textField}
      ph="******"
    />
    <Button
      title="SignIn"
      onPress={props.handleSubmit(props.login)}
    />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
