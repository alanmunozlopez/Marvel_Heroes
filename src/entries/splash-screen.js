import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeroCardSplash from './components/hero-card-splash';

class SplashScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Marvel Heroes',
    tabBarLabel: ' ',
    headerBackTitle: ' ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'red',
  });
  constructor() {
    super();
    this.state = {
      nombre: 'SplashScreen',
    };
  }

  render() {
    console.log('PROPIEDADES');
    console.log(this.props);

    return (
      <View style={styles.container}>
        <HeroCardSplash />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  textDemo: {
    color: 'red',
    fontSize: 20,
  },
  flat: {
    flex: 1,
  },
});

export default SplashScreen;
