import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, Content} from './styles';

const ButtonCustom = ({Title, Active = false, onPress, Theme, styles}) => {
  let stylesTitle = {};
  if (Theme === 'toggle') {
    styles = {
      backgroundColor: Active ? '#5D39DB' : '#fff',
      borderColor: Active ? '#5D39DB' : '#394064',
      width: 100,
    };
    stylesTitle = {
      color: Active ? '#FFF' : '#394064',
    };
  } else {
    styles = {
      backgroundColor: '#5D39DB',
      borderColor: '#5D39DB',
    };
    stylesTitle = {
      color: '#FFF',
    };
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Content style={styles}>
        <Text style={stylesTitle}>{Title}</Text>
      </Content>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
