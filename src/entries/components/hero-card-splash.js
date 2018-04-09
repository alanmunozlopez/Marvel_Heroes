import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import FadeInOutAnimation from './fade-in-out-animation';
import HeroIcons from '../shared/hero-icons';

// You can then use your `FadeInView` in place of a `View` in your components:
const HeroCardSplash = () => (
  <View style={styles.container}>
    <FadeInOutAnimation
      // style={{ width: 250, height: 50 }}
      from={0}
      to={1}
    >
      <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      />
      {/* <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      /> */}
      {/* <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text> */}
    </FadeInOutAnimation>
    <FadeInOutAnimation
      // style={{ width: 250, height: 50 }}
      from={1}
      to={0}
    >
      <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      />
      {/* <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      /> */}
    </FadeInOutAnimation>
    <FadeInOutAnimation
      // style={{ width: 250, height: 50 }}
      from={0}
      to={1}
    >
      <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      />
      {/* <Image
        style={styles.heroIcons}
        source={{ uri: HeroIcons() }}
      /> */}
    </FadeInOutAnimation>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heroIcons: {
    width: 60,
    height: 60,
  },
});

export default HeroCardSplash;
