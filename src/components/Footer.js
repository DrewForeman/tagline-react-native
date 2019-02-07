import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'react-native-elements';

import { colorDark, colorLightest } from '../styles';

// TODO: make nav nodes clickable and scroll to next
const Footer = () => {
  const {
    container,
  } = styles;

  return (
    <View style={ container }>
      <Icon name="plus-circle"
            type="font-awesome"
            size={32}
            color={ colorLightest }
            onPress={ () => console.log('will add tag') } />
    </View>
  );
}

export default Footer;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colorDark,
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 18,
  },
});
