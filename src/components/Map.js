import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';

import MapView, { Marker } from 'react-native-maps';
import { SearchBar } from 'react-native-elements';

import TagCarousel from './TagCarousel';
import markerImg from '../img/marker-grey.png'
import { mapHeight, mapWidth } from '../styles';

// Placeholder values
const initialLat = 37.806463;
const initialLng = -122.270330;
const initialLatDelta = 0.0222;
const initialLngDelta = 0.0221;

// TODO: remove api calls and state functionality into reducers

export default class Map extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      location: '4600 Adeline St., Emeryville, CA', // TODO: set this based on geolocation
    };
    this.updateLocation = this.updateLocation.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.clearLocation = this.clearLocation.bind(this);
  }

  updateLocation(e) {
    this.setState({location:e})
    console.log('updated destination:', this.state.destination)
  }

  clearLocation() {
    this.setState({location:null})
    console.log('cleared destination')
  }

  getLocation() {
    // call google api to get location
  }

  toggleSearchBars() {
    this.setState({showSearchBars:!this.state.showSearchBars});
  }

  render() {
    const { onMapReady, tags } = this.props;
    console.log(navigator)
    return (
      <View>
        <SearchBar
          platform="ios"
          containerStyle={styles.search}
          ref='searchBar'
          value={this.state.location}
          onChangeText={this.updateLocation}
          onCancel={this.clearLocation}
        />
        <MapView
          initialRegion={{
            latitude: initialLat,
            longitude: initialLng,
            latitudeDelta: initialLatDelta,
            longitudeDelta: initialLngDelta,
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
         <TagCarousel tags={tags}/>
       </View>
    );
  }
}

const styles = EStyleSheet.create({
  map: {
    height: mapHeight,
    width: mapWidth,
  },
  search: {
    marginTop: 28,
  }
});
