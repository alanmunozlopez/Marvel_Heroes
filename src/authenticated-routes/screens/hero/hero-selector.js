import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HeroSelector extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'HeroSelector',
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> HeroSelector </Text>
        <Button
          title="See HeroDetails"
          onPress={() => { navigation.navigate('HeroDetails') ;}}  
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

export default HeroSelector;
