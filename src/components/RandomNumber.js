import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class RandomNumber extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  handlePress = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.onPress(this.props.id);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text
          style={[
            styles.random,
            this.props.isDisabled && styles.selectedRandom,
          ]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 35,
    fontSize: 35,
    textAlign: 'center',
  },
  selectedRandom: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 35,
    fontSize: 35,
    textAlign: 'center',
    opacity: 0.3,
  },
});
