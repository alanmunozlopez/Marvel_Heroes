import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
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

export default SignIn;
