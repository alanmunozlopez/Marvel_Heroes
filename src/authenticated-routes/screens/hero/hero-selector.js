import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import HeroCardList from './components/hero-card-list';
import { listOfHeroesAction } from '../../../store/actions';
import Marvel from '../../../store/services/marvel';

import NativeModules from 'NativeModules';

class HeroSelector extends Component {
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
      nombre: 'HeroSelector',
      data: [],
    };
  }

  componentDidMount() {
    this.state.data = this.props.heroes;
    if(Platform.OS === 'ios') {
      console.log('Play avengers theme');
      NativeModules.Avengers.playTheme();
    }
  }

  heroClick = (hero) => {
    const { navigation } = this.props;
    navigation.navigate(
      'HeroDetails',
      {
        hero,
      },
    );
    console.log(`frend the hero: ${hero}`);
  }

  render() {
    let normalMsg = 'hola';
    if (this.props.heroes) {
      normalMsg = 'chau';
      this.state.isSplashRender = false;
      this.state.data = this.props.heroes.values;
    }
    return (
      <View style={styles.container}>
        <HeroCardList
          heroList={this.state.data}
          heroClick={this.heroClick}
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
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => ({
  heroes: state.reducerHeroes,
});

const mapDispatchToProps = dispatch => ({
  listOfHeroes: () => true,
  // listOfHeroes: () => {
  //   const marvelEndpoint = Marvel();
  //   console.log(marvelEndpoint);
  //   fetch(marvelEndpoint)
  //     .then(response => response.json())
  //     .then(responseJson => responseJson.data.results)
  //     .then((responseData) => {
  //       console.log(responseData);
  //       console.log('hihi');
  //       console.log(this.state);
  //       dispatch(listOfHeroesAction(responseData));
  //     });
  // },
});


export default connect(mapStateToProps, mapDispatchToProps)(HeroSelector);
