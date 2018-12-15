import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colorText } from '../styles';

const CardDetails = (props) => {
  const { wrapper, tagTitle } = styles;
  const { title, description, owner } = props.tag;
  return (
    <View style={ wrapper }>
      <Text style={ tagTitle }>{ title }</Text>
      <Text>{ description }</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    color: colorText,
  },
  tagTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default CardDetails;
