import React, { Component } from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import HeroDetailsBox from './components/hero-details-box';

class HeroDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    title: `${navigation.state.params.title === undefined ? ' ' : navigation.state.params.title}`,
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: 'white',
  })
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'HeroDetails',
      selectedInfo: 0,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.navigation.state.params.hero.name,
    });
  }

  handleSelectInfo(number, props) {
    console.log('esto es');
    console.log(number);
    console.log(props);
    props.selectedItem = number;
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props.navigation.state.params);
    this.state.selectedInfo = 1;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backdrop}
            resizeMode="cover"
            source={{ uri: this.props.navigation.state.params.hero.image }}
          />
        </View>
        <View style={styles.overlay}>
          <HeroDetailsBox
            description={this.props.navigation.state.params.hero.description}
            urls={this.props.navigation.state.params.hero.wiki}
            events={this.props.navigation.state.params.hero.events}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.8,
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 16,
    paddingBottom: 32,
  },
  overlayTitle: {
    // opacity: 1,
    backgroundColor: 'red',
    width: '100%',
    padding: 16,
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
  },
  wikiText: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
  },
  heroDescription: {
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HeroDetails;
