import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './forms/sing-up-form';
import { registerAction } from '../store/actions';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'SignUp',
    };
  }
  registerUser = (values) => {
    console.log(values);
    this.props.register(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignUp </Text>
        <SignUpForm
          register={this.registerUser}
        />
        <Button
          title="Back to Login"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  register: (values) => {
    dispatch(registerAction(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
