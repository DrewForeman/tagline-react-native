import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colorText } from '../styles';

export default class StickyMap extends Component<Props> {
  render() {
    const { numTags } = this.props;
    const { container, tagNode } = styles;
    const data = Array.apply(null, Array(numTags)).map((node, idx) => {
      return { key: idx };
    });
    return (
      <View style={ container }>
        { data.map(tag => (
          <View key={ tag.id } style={ tagNode } />
        )) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorText,
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tagNode: {
    backgroundColor: '#FFFFFF',
    height: 10,
    width: 10,
  },
});
