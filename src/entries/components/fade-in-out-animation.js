import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class FadeInOutView extends Component {
    state = {
      fadeAnim: new Animated.Value(this.props.from), // Initial value for opacity: 0
    }

    componentDidMount() {
      this.cycleAnimation(); // Starts the animation
    }

    cycleAnimation() {
      Animated.sequence([
        Animated.timing(this.state.fadeAnim, {
          toValue: this.props.to,
          duration: 600,
          delay: 300,
        }),
        Animated.timing(this.state.fadeAnim, {
          toValue: this.props.from,
          duration: 600,
        }),
      ]).start(() => {
        this.cycleAnimation();
      });
    }

    render() {
      const { fadeAnim } = this.state;

      return (
        <Animated.View // Special animatable View
          style={{
            ...this.props.style,
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
}
