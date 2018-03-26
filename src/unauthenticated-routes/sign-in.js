import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from '../store/actions';
import SignInForm from './forms/sign-in-form';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'SignIn',
    };
  }
  userSignIn = (values) => {
    this.props.login(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <SignInForm
          login={this.userSignIn}
        />
        <Button
          title="Create Account"
          onPress={() => { navigation.navigate('SignUp') }}
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
    backgroundColor: 'blue',
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (values) => {
    dispatch(loginAction(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
