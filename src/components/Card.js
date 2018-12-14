import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colorTextLight } from '../styles';

export default class Card extends Component<Props> {
  render() {
    const { title } = this.props.tag;
    return (
      <View style={styles.container}>
        <Text>{ title }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: colorTextLight,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 300,
  },
});
