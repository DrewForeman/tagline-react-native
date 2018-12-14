import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

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
          <View key={ tag.key } style={ tagNode } />
        )) }
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colorText,
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tagNode: {
    backgroundColor: '#FFFFFF',
    height: 16,
    width: 16,
    borderRadius: 50,
  },
});
