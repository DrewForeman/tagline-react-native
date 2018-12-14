import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Card from './components/Card';
import Header from './components/Header';
import StickyMap from './components/StickyMap';

import { dummyTags } from './DummyTags';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tagline" />
        <StickyMap numTags={ dummyTags.length } />
        <FlatList
          data={dummyTags}
          keyExtractor={ item => item.title }
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

EStyleSheet.build();
