import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Unauthenticated from './unauthenticated';
import Authenticated from './authenticated';

console.disableYellowBox = ['Remote Debugger'];

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'MarvelHeroes',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Authenticated />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Entry;
