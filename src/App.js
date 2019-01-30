import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Card from './components/Card';
import Header from './components/Header';
import StickyMap from './components/StickyMap';

// import { dummyTags } from './DummyTags';
import { textColorLight } from './styles'

import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://127.0.0.1:5000'
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
      this.setState({ tags: response.data.tags })
    }).catch(error => {
      console.log('there was an error')
    })
  }

  onListChange = ({ viewableItems }) => {
    // TODO: find a better way to handle
      this.setState({ currentTagIdx: viewableItems[0].index })
  }

  render() {
    const {currentTagIdx, tags} = this.state;

    if (!tags.length) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Header headerText="Tagline" />
        <StickyMap currentTagIdx={ currentTagIdx }
                   numTags={ tags.length } />
        <FlatList
          data={tags}
          horizontal
          onViewableItemsChanged={ this.onListChange }
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card tag={ item } />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColorLight,
  },
});

let {height, width} = Dimensions.get('window').width;

EStyleSheet.build({
  $cardWidth: Dimensions.get('window').width - 10,
});
