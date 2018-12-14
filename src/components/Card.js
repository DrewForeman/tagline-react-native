import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CardDetails from './CardDetails';

export default class Card extends Component<Props> {
  render() {
    const { asset, ...tag } = this.props.tag;
    const { cardContainer, imgContainer, tagImage } = styles;
    return (
      <View style={ cardContainer }>
        <View style={ imgContainer }>
          <Image resizeMode="cover" style={ tagImage } source={ { uri: asset } } />
          <CardDetails tag={ tag }/>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
  },
  imgContainer: {
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tagImage: {
    width: '100%',
    height: '100%',
  }
});
