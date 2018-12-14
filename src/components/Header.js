import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { colorPrimary, colorText } from '../styles';

import AddTagButton from './AddTagButton';
import SearchButton from './SearchButton';

const Header = (props) => {
  const { headerText } = props;
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <SearchButton />
      <Text style={textStyle}>{ headerText }</Text>
      <AddTagButton />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: colorPrimary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  textStyle: {
    alignSelf: 'center',
    color: colorText,
    fontSize: 20,
  },
};

export default Header;
