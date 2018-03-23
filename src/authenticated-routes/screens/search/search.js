import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'Search',
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Search </Text>
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
    backgroundColor: 'blue',
  },
});

export default Search;
