import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';
import Header from './components/Header';
import StickyMap from './components/StickyMap';

export default class App extends Component<Props> {
  render() {
    const dummyTags = [
      { id: 1, title: 'First Tag'},
      { id: 2, title: 'Second Tag'},
      { id: 3, title: 'Third Tag'},
      { id: 4, title: 'Fourth Tag'},
      { id: 5, title: 'Fifth Tag'},
      { id: 6, title: 'Sixth Tag'},
      { id: 6, title: 'Seventh Tag'},
    ]
    return (
      <View style={styles.container}>
        <Header headerText="Tagline" />
        <StickyMap numTags={ dummyTags.length } />
        <FlatList
          data={dummyTags}
          renderItem={({ item }) => <Card tag={ item } />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
