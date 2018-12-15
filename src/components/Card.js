import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CardDetails from './CardDetails';
import { colorText, colorTextMedium, textSmall } from '../styles';

const OwnerDetails = ({name, image}) => {
  const { ownerDetailsWrapper, userInfo, userImage, userDetails } = styles;
  return (
    <View style={ ownerDetailsWrapper }>
      <Image style={ userImage } source={ { uri: image } }/>
      <View style={ userInfo }>
        <Text>{ name }</Text>
        <Text style={ userDetails }>2 months ago</Text>
      </View>
    </View>
  )
}

export default class Card extends Component<Props> {
  render() {
    const { asset, owner, ...tag } = this.props.tag;
    const { cardContainer, imgContainer, tagImage } = styles;
    return (
      <View style={ cardContainer }>
        <View style={ imgContainer }>
          <OwnerDetails name={ owner.name } image={ owner.image } />
          <Image resizeMode="cover" style={ tagImage } source={ { uri: asset } } />
          <CardDetails tag={ tag }/>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    width: '$cardWidth',
    color: colorText,
  },
  imgContainer: {
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tagImage: {
    width: '100%',
    height: '100%',
  },
  ownerDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  userImage: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  userInfo: {
    marginLeft: 10,
  },
  userDetails: {
    color: colorTextMedium,
    fontSize: textSmall,
  }
});
