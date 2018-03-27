import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


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

export default textField;
