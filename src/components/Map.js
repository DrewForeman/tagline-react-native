import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import MapView, { Marker } from 'react-native-maps';

import markerImg from '../img/marker-grey.png'

export default class Map extends Component<Props> {
  render() {
    const { tags } = this.props;
    return (
      <MapView
        initialRegion={{
          latitude: 37.806463,
          longitude: -122.270330,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0221,
        }}
        style={styles.map}>
        {tags.length && tags.map(tag => (
          <Marker
            key={tag.id}
            coordinate={{
              latitude: tag.latitude,
              longitude: tag.longitude
            }}
            image={markerImg}
          />
        ))}
       </MapView>
    );
  }
}

const styles = EStyleSheet.create({
  map: {
    height: '$mapHeight',
    width: '$mapWidth',
  },
});
