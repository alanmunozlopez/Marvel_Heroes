import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';

class Popularity extends Component {
  static navigationOptions = {
    title: 'Popular Heroes',
    headerBackTitle: ' ',
    tabBarLabel: ' ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'red',
  };
  constructor() {
    super();
    this.state = {
      nombre: 'Popularity',
    };
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text> Popularity </Text>
        <Button
          title="HeroDetails"
          onPress={() => { navigation.navigate('HeroDetails'); }}
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
  listOfHeroes: () => {
    return true;
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Popularity);
