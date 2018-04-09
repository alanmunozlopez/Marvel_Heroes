import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import HeroCard from './hero-card';

function HeroCardList(props) {
  _renderItem = data => (<HeroCard
    id={data.item.id}
    name={data.item.name}
    image={`${data.item.thumbnail.path.replace('http:', 'https:')}.${data.item.thumbnail.extension}`}
    description={data.item.description}
    wiki={data.item.urls}
    events={data.item.events.items}
    onPressHero={this.onPressHeroCard}
    heroClick={props.heroClick}
  />);

  return (
    <FlatList
      data={props.heroList}
      renderItem={this._renderItem}
      numColumns={1}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
  },
});

export default HeroCardList;
