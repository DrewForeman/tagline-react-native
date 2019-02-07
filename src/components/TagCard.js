import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Card, Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colorLight, colorDark, colorShadow, textSmall } from '../styles';

export default class TagCard extends Component<Props> {

  render() {
    const { tag } = this.props;
    return (
      <Card containerStyle={styles.containerStyle}
            wrapperStyle={styles.wrapperStyle}>
        <Image source={{uri: tag.asset}}
              style={styles.primaryImage} />
        <View style={styles.tagInfo}>
        { tag.owner &&
            <View style={styles.ownerDetailsWrapper}>
              <Avatar rounded
                      size="small"
                      source={{uri: tag.owner.image}} />
              <View style={styles.userInfo}>
                <Text style={styles.userTitle}>{tag.owner.name}</Text>
                <Text style={styles.userDetails}>January 26</Text>
              </View>
            </View>
          }
          <View style={styles.quoteContainer}>
            <Text style={styles.titleText}>{tag.title}</Text>
          </View>
        </View>
      </Card>
    )
  }
}

const styles = EStyleSheet.create({
  containerStyle: {
    padding: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colorShadow,
    shadowRadius: 2,
    shadowOpacity: 1.0,
  },
  wrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryImage: {
    width: 80,
    height: 80,
  },
  tagInfo: {
    marginLeft: 10,
  },
  ownerDetailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTitle: {
    color: colorDark,
  },
  userInfo: {
    marginLeft: 5,
  },
  userDetails: {
    color: colorShadow,
    fontSize: textSmall,
  },
  quoteContainer: {
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10,
    color: colorDark,
    fontSize: 18,
    fontFamily: 'Cochin',
  },
});
