import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'SignUp',
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignUp </Text>
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

export default SignUp;
