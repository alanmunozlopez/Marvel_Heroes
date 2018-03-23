import { TabNavigator } from 'react-navigation';
import HeroStack from '../authenticated-routes/screens/hero/hero-selector';
import Popularity from '../authenticated-routes/screens/popularity';
import Search from '../authenticated-routes/screens/search';

const Authenticated = TabNavigator({
  HeroSelector: {
    screen: HeroStack,
  },
  Popularity: {
    screen: Popularity,
  },
  Search: {
    screen: Search,
  },
},
{
  tabBarPosition: 'bottom',
},
);

export default Authenticated;
