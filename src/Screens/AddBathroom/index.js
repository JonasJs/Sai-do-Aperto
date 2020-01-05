import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {RNCamera} from 'react-native-camera';

import {Container, Text} from './styles';

const AddBathroom = ({navigation}) => {
  const camera = useRef();
  useEffect(() => {}, []);
  return (
    <Container>
      <Text>jonas</Text>
      <Icon
        name="pluscircle"
        size={50}
        color="#FFBE0B"
        backgroundColor="#fff"
        onPress={() => navigation.goBack()}
      />
      <RNCamera
        style={{flex: 1}}
        ref={camera}
        type={RNCamera.Constants.Type.back}
        permissionDialogTitle="Persimissão para usar a camera"
        permissionDialogMenssage="Precisamos usar a sua camera"
      />
    </Container>
  );
};

AddBathroom.navigationOptions = {
  header: true,
};

export default AddBathroom;
