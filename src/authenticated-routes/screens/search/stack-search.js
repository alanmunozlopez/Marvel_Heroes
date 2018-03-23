import { StackNavigator } from 'react-navigation';
import Search from './search';
import HeroDetails from '../hero/hero-details';

const StackHero = StackNavigator({
  Search: {
    screen: Search,
  },
  HeroDetails: {
    screen: HeroDetails,
  },
});

export default StackHero;
