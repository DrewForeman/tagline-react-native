import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import EStyleSheet from 'react-native-extended-stylesheet';

import TagCard from './TagCard';
import { sliderWidth, itemWidth } from '../styles';

const DummyCard = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default class TagCarousel extends Component<Props> {
  _renderItem ({item, index}) {
      return (
          <TagCard tag={item} />
      );
  }

  render() {
    console.log(this.props.tags)
    return (
      <Carousel
          data={this.props.tags}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer} />
    );
  }
}

const styles = EStyleSheet.create({
  slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
  sliderContentContainer: {
      paddingVertical: 10 // for custom animation
  },
});
