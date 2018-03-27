import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SectionList,
  FlatList,
} from 'react-native';
import HeroCard from './hero-card';

function HeroCardList(props) {
  _renderItem = data => (<HeroCard
    id={data.item.id}
    name={data.item.name}
    onPressHero={this.onPressHeroCard}
    heroClick={props.heroClick}
  />);

  return (
    <FlatList
      data={props.heroList}
      renderItem={this._renderItem}
      numColumns={2}
    />
  );
}

export default HeroCardList;
