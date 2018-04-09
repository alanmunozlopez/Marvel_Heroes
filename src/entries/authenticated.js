import React from 'react';
import { TabNavigator } from 'react-navigation';
import StackHero from '../authenticated-routes/screens/hero';
import StackSearch from '../authenticated-routes/screens/search/stack-search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Authenticated = TabNavigator(
  {
    StackHero: {
      screen: StackHero,
    },
    StackSearch: {
      screen: StackSearch,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'StackHero') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'StackSearch') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        paddingTop: 8,
      },
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  },
);

export default Authenticated;
