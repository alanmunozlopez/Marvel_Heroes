import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Authenticated from './authenticated';
import SplashScreen from './splash-screen';

import { heroesAction } from '../store/actions';
import Marvel from '../store/services/marvel';

class SelectorScreen extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'MarvelHeroes',
    };
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.heroes
          ? <Authenticated />
          : <SplashScreen />
        }
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

const mapStateToProps = state => ({
  heroes: state.reducerHeroes,
});

const mapDispatchToProps = dispatch => ({
  getHeroes: () => {
    const marvelEndpoint = Marvel();
    console.log(marvelEndpoint);
    fetch(marvelEndpoint)
      .then(response => response.json())
      .then(responseJson => responseJson.data.results)
      .then((responseData) => {
        console.log(responseData);
        console.log('RESPONSE HEROES');
        console.log(this.state);
        dispatch(heroesAction(responseData));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectorScreen);
