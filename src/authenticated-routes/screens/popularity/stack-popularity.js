import { StackNavigator } from 'react-navigation';
import Popularity from './popularity';
import HeroDetails from '../hero/hero-details';

const StackHero = StackNavigator({
  Popularity: {
    screen: Popularity,
  },
  HeroDetails: {
    screen: HeroDetails,
  },
});

export default StackHero;
