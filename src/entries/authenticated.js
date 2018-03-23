import { TabNavigator } from 'react-navigation';
import StackHero from '../authenticated-routes/screens/hero';
import StackPopularity from '../authenticated-routes/screens/popularity/stack-popularity';
import StackSearch from '../authenticated-routes/screens/search/stack-search';

const Authenticated = TabNavigator(
  {
    StackHero: {
      screen: StackHero,
    },
    StackPopularity: {
      screen: StackPopularity,
    },
    StackSearch: {
      screen: StackSearch,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);

export default Authenticated;
