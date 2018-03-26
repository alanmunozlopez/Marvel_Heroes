import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { authentication } from '../store/services/firebase';
import Unauthenticated from './unauthenticated';
import Authenticated from './authenticated';
import { beginSessionAction, closeSessionAction } from '../store/actions';

class SelectorScreen extends Component {
  constructor() {
    super();
    this.state = {
      nombre: 'MarvelHeroes',
    };
  }

  componentDidMount() {
    this.props.authentication();
  }

  render() {
    return (
      <View style={styles.container}>
        {
        this.props.user ?
          <Authenticated /> :
          <Unauthenticated />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

const mapStateToProps = state => ({
  user: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  authentication: () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.toJSON());
        dispatch(beginSessionAction(user));
        // const displayName = user.displayName;
        // const email = user.email;
        // const emailVerified = user.emailVerified;
        // const photoURL = user.photoURL;
        // const isAnonymous = user.isAnonymous;
        // const uid = user.uid;
        // const providerData = user.providerData;
      } else {
        console.log('session dont detected');
        dispatch(closeSessionAction());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectorScreen);
