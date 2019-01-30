import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colorText, colorTextLight, colorSecondary } from '../styles';

// TODO: make nav nodes clickable and scroll to next
const StickyMap = ({ currentTagIdx, numTags }) => {
  const {
    container,
    lineContainer,
    nodeContainer,
    tagLine,
    tagNode,
    tagNodeSelected,
    tagConnector
  } = styles;

  const data = Array.apply(null, Array(numTags)).map((node, idx) => {
    return { key: idx };
  });
  return (
    <View style={ container }>
      <View style={ lineContainer }>
        <View style={ tagLine } />
        <View style={ nodeContainer }>
          { data.map(tag => (
              <View key={ tag.key }
                    style={ tag.key === currentTagIdx ? tagNodeSelected : tagNode } />
          )) }
        </View>
      </View>
    </View>
  );
}

export default StickyMap;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colorText,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  lineContainer: {
    width: '90%',
    paddingTop: 24,
  },
  nodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    top: -17,
  },
  tagNode: {
    backgroundColor: '#FFFFFF',
    height: 16,
    width: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tagNodeSelected: {
    backgroundColor: '#FFFFFF',
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colorSecondary,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tagLine: {
    height: 6,
    backgroundColor: colorTextLight,
    width: '100%',
  }
});
