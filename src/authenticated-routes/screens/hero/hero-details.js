import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HeroDetails extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'HeroDetails',
    };
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props.navigation.state.params);
    return (
      <View style={styles.container}>
        <Text> HeroDetails </Text>
        <Text> {this.props.navigation.state.params.hero.name} </Text>
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

export default HeroDetails;
