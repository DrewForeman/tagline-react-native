import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Card from './components/Card';
import Header from './components/Header';
import StickyMap from './components/StickyMap';

import { dummyTags } from './DummyTags';
import { textColorLight } from './styles'

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { currentTagIdx: 0 }
  }

  onListChange = ({ viewableItems }) => {
    // TODO: find a better way to handle
      this.setState({ currentTagIdx: viewableItems[0].index })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tagline" />
        <StickyMap currentTagIdx={ this.state.currentTagIdx }
                   numTags={ dummyTags.length } />
        <FlatList
          data={dummyTags}
          horizontal
          onViewableItemsChanged={ this.onListChange }
          keyExtractor={ item => item.title }
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
