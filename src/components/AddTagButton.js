import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { colorText } from '../styles';

const AddTagButton = (onPress) => {
  const { plusStyle } = styles;
  return (
    <TouchableOpacity onPress={ () => console.log('Add Tag') } >
      <Text style={ plusStyle }>+</Text>
    </TouchableOpacity>
  )
}

const styles = {
  plusStyle: {
    alignSelf: 'flex-end',
    color: colorText,
    fontSize: 24,
    fontWeight: '600',
    paddingRight: 20,
  }
};

export default AddTagButton;
