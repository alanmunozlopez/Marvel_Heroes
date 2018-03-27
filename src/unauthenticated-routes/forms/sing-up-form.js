import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { authentication } from '../../store/services/firebase';
import validationSignForm from './shared/validation-sign-form';

const textField = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={
          !!(props.input.name === 'password' || props.input.name === 'confirmationPass')
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

const validate = values => validationSignForm(values);

const SignUpForm = props => (
  <View>
    <Field
      name="name"
      component={textField}
      ph="name"
    />
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
    <Field
      name="confirmationPass"
      component={textField}
      ph="******"
    />
    <Button
      title="Register"
      onPress={props.handleSubmit(props.register)}
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
  form: 'SignUpForm',
  validate,
})(SignUpForm);
