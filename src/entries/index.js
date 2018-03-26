import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Store from '../store';
import SelectorScreen from './selector-screen';

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
        <Provider store={Store}>
          <SelectorScreen />
        </Provider>
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
