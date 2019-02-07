import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Footer from './components/Footer';
import Map from './components/Map';

import { textColorLight } from './styles'

import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://127.0.0.1:5000/api'
})

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { tags: [], currentTagIdx: 0 }
  }

  componentDidMount() {
      this.getTags();
  }

  getTags(){
    return axiosApi.get('/tags').then(response => {
      this.setState({ tags: response.data.data })
    }).catch(error => {
      console.log('there was an error')
    })
  }

  render() {
    const {currentTagIdx, tags} = this.state;
    if (!tags.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Map onMapReady={this.getTags} tags={ tags }/>
        <Footer />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: textColorLight,
  },
});

EStyleSheet.build();
