import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colorText } from '../styles';

const OwnerDetails = ({name, image}) => {
  const { ownerDetailsWrapper, userInfo, userImage } = styles;
  return (
    <View style={ ownerDetailsWrapper }>
      <Image style={ userImage } source={ { uri: image } }/>
      <Text style={ userInfo }>{ name }</Text>
    </View>
  )
}

const CardDetails = (props) => {
  const { wrapper, tagTitle } = styles;
  const { title, description, owner } = props.tag;
  return (
    <View style={ wrapper }>
      <OwnerDetails name={ owner.name } image={ owner.image } />
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
  ownerDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    height: 36,
    width: 36,
    borderRadius: 180,
  },
  userInfo: {
    marginLeft: 10,
  }
});

export default CardDetails;
