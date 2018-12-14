import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { colorText } from '../styles';

const SearchButton = (onPress) => {
  const { searchStyle } = styles;
  return (
    <TouchableOpacity onPress={ () => console.log('Add Tag') } >
      <Text style={ searchStyle }>o</Text>
    </TouchableOpacity>
  )
}

const styles = {
  searchStyle: {
    alignSelf: 'flex-start',
    color: colorText,
    fontSize: 24,
    fontWeight: '600',
    paddingLeft: 20,
  }
};

export default SearchButton;
