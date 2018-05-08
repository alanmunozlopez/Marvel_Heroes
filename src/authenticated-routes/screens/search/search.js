import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ListView, TextInput, ActivityIndicator } from 'react-native';
import SearchViewElement from './components/search-view-element';

class Search extends Component {
  static navigationOptions = {
    title: 'Search Heroes',
    tabBarLabel: ' ',
    headerBackTitle: ' ',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'red',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: '',
    };
    this.arrayHolder = [];
  }

  componentDidMount() {
    console.log(this.props);
    this.arrayHolder = this.props.heroes.values;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(this.arrayHolder),
    });
  }

  SearchFilterFunction(text) {
    const newData = this.arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text,
    });
  }

  ListViewItemSeparator = () => (
    <View
      style={{
          height: 1.5,
          width: '100%',
          backgroundColor: 'gray',
        }}
    />
  )

  rowClick = (hero) => {
    const { navigation } = this.props;
    navigation.navigate(
      'HeroDetails',
      {
        hero,
      },
    );
    console.log(`frend the hero: ${hero}`);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <View style={styles.container}>

        <TextInput
          style={styles.textSearch}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Hero"
        />

        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={rowData => (
            <SearchViewElement
              hero={rowData}
              rowClick={this.rowClick}
            />
          )}
          enableEmptySections
          style={{ marginTop: 8 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },

  textSearch: {

    textAlign: 'center',
    height: 40,
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
  },

});

const mapStateToProps = state => ({
  heroes: state.reducerHeroes,
});

const mapDispatchToProps = dispatch => ({
  listOfHeroes: () => true,
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
