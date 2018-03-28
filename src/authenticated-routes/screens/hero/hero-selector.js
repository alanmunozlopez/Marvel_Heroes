import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../../../store/services/firebase';
import HeroCardList from './components/hero-card-list';
import { listOfHeroesAction } from '../../../store/actions';
import Marvel from '../../../store/services/marvel';

class HeroSelector extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'HeroSelector',
      data: [
        { id: 'a', name: 'aaa', thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7', extension: 'jpg' } },
        { id: 'b', name: 'bbb', thumbnail: { path: 'https://facebook.github.io/react-native/docs/assets/favicon', extension: 'png' } },
        { id: 'c', name: 'ccc', thumbnail: { path: 'https://facebook.github.io/react-native/docs/assets/favicon', extension: 'png' } },
      ],
    };
  }

  componentDidMount() {
    this.props.listOfHeroes();
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
      this.state.data = this.props.heroes.values;
    }
    return (
      <View style={styles.container}>
        <Text> {normalMsg} </Text>
        <Text> {!this.props.heroes ? 'Nigga' : 'is here suckers' } </Text>
        <HeroCardList
          heroList={this.state.data}
          heroClick={this.heroClick}
        />
        <Button
          title="kill session"
          onPress={() => { authentication.signOut(); }}
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
    backgroundColor: '#949494',
  },
});

const mapStateToProps = state => ({
  heroes: state.reducerHeroes,
});

const mapDispatchToProps = dispatch => ({
  listOfHeroes: () => {
    const marvelEndpoint = Marvel();
    console.log(marvelEndpoint);
    fetch(marvelEndpoint)
      .then(response => response.json())
      .then(responseJson => responseJson.data.results)
      .then((responseData) => {
        console.log(responseData);
        dispatch(listOfHeroesAction(responseData));
      });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HeroSelector);
