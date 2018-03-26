import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { authentication } from '../../../store/services/firebase';
import HeroCardList from './components/hero-card-list';

class HeroSelector extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'HeroSelector',
      data: [
        { id: 'a', name: 'aaa'},
        { id: 'b', name: 'bbb'},
        { id: 'c', name: 'ccc'},
        { id: 'd', name: 'ddd'},
        { id: 'e', name: 'eee'},
        { id: 'f', name: 'fff'},
        { id: 'g', name: 'ggg'},
        { id: 'h', name: 'hhh'},
        { id: 'i', name: 'iii'},
        { id: 'j', name: 'jjj'},
        { id: 'k', name: 'kkk'},
        { id: 'l', name: 'lll'},
        { id: 'm', name: 'mmm'},
        { id: 'n', name: 'nnn'},
        { id: 'o', name: 'ooo'},
        { id: 'p', name: 'ppp'},
        { id: 'q', name: 'qqq'}
      ],
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> HeroSelector </Text>
        <HeroCardList
          heroList={this.state.data}
        />
        <Button
          title="See HeroDetails"
          onPress={() => { navigation.navigate('HeroDetails') ;}}  
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

export default HeroSelector;
