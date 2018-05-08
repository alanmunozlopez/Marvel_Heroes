import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import HeroDetailsView from './hero-details-view';


const setDetailsBox = (props) => {
  const viewslo = [];
  console.log('kkk');
  console.log(props);
  const events = props.events ? props.events.slice(0, 5) : false;
  const urls = props.urls ? props.urls.slice(0, 3) : false;

  if (props.description) {
    viewslo.push(
      <HeroDetailsView
        description={props.description}
      />
    );
  }
  if (props.events) {
    viewslo.push(
      <HeroDetailsView
        events={events}
      />
    );
  }
  if (props.urls) {
    viewslo.push(
      <HeroDetailsView
        links={urls}
      />
    );
  }

  return viewslo;
};

const HeroDetailsBox = props =>
  (
    <View
      style={styles.container}
    >
      <SwipeableViews>
        {
        setDetailsBox(props).map(item => (
          item
        ))
      }
      </SwipeableViews>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    opacity: 0.8,
    backgroundColor: 'white',
  },
  textInfo: {
    // textShadowColor: 'gray',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textLink: {
    // textShadowColor: 'gray',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    padding: 4,
    paddingBottom: 8,
  },
});

export default HeroDetailsBox;
