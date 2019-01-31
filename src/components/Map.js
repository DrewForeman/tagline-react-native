import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';

import MapView, { Marker } from 'react-native-maps';
import SearchBar from 'react-native-search-bar'

import markerImg from '../img/marker-grey.png'

const gooleMapsApi = 'https://maps.googleapis.com/maps/api/directions/json?';

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
      origin: '4600 Adeline St., Emeryville, CA', // TODO: set this based on geolocation
      destination: null,
      showSearchBars: true,
    };
    this.updateDestination = this.updateDestination.bind(this);
    this.clearDestination = this.clearDestination.bind(this);
    this.getDirections = this.getDirections.bind(this);
    this.toggleSearchBars = this.toggleSearchBars.bind(this);
  }

  componentDidMount() {
      this.refs.originSearchBar.unFocus()
      this.refs.searchBar.focus()
  }

  updateDestination(e) {
    this.setState({destination:e})
    console.log('updated destination:', this.state.destination)
  }

  clearDestination() {
    this.setState({destination:null})
    console.log('cleared destination')
  }

  getDirections() {
    console.log('getting directions')
    console.log(this.state.origin, this.state.destination)
    const {origin, destination} = this.state;
    // 1. display the route, potentially using react-native-maps-directions
    // 2. call get tags api with origin/destination params
    this.toggleSearchBars()
  }

  toggleSearchBars() {
    this.setState({showSearchBars:!this.state.showSearchBars});
  }

  render() {
    const { onMapReady, tags } = this.props;
    console.log(navigator)
    return (
      <View>
        { this.state.showSearchBars &&
          <View>
            <SearchBar
              searchBarStyle="minimal"
              ref='originSearchBar'
              placeholder={this.state.origin}
            />
            <SearchBar
              searchBarStyle="minimal"
              ref='searchBar'
              placeholder='Where are you going?'
              onChangeText={this.updateDestination}
              onSearchButtonPress={this.getDirections}
              onCancelButtonPress={this.clearDestination}
            />
          </View>
        }
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
       </View>
    );
  }
}

const styles = EStyleSheet.create({
  map: {
    height: '$mapHeight',
    width: '$mapWidth',
  },
});
