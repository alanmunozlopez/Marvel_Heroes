import { StackNavigator } from 'react-navigation';
import HeroSelector from './hero-selector';
import HeroDetails from './hero-details';

const StackHero = StackNavigator({
  HeroSelector: {
    screen: HeroSelector,
  },
  HeroDetails: {
    screen: HeroDetails,
  },
});

export default StackHero;
