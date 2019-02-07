import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Card, Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colorLight, colorDark, colorShadow, textSmall } from '../styles';

export default class TagCard extends Component<Props> {

  render() {
    const { created, owner, primary_image: primaryImage, title } = this.props.tag;
    return (
      <Card containerStyle={styles.containerStyle}
            wrapperStyle={styles.wrapperStyle}>
        { primaryImage &&
          <Image source={{uri: primaryImage}}
                style={styles.primaryImage} />
        }
        <View style={styles.tagInfo}>
        { owner &&
            <View style={styles.ownerDetailsWrapper}>
              <Avatar rounded
                      size="small"
                      source={{uri: owner.image}} />
              <View style={styles.userInfo}>
                <Text style={styles.userTitle}>{owner.name}</Text>
                <Text style={styles.userDetails}>{created}</Text>
              </View>
            </View>
          }
          <View style={styles.quoteContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      </Card>
    )
  }
}

const styles = EStyleSheet.create({
  containerStyle: {
    margin: 5,
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
