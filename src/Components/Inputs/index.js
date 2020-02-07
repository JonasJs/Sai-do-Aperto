import React from 'react';
import {Text, Content, TextInput} from './styles';

const Input = ({Type, Label, Value, Editable, onChangeText, placeholder}) => {
  const TextArea = {
    flex: 1,
    height: 180,
    paddingTop: 8,
  };
  return (
    <>
      {Type !== 'textArea' ? (
        <Content>
          <Text>{Label}</Text>
          <TextInput
            onChangeText={onChangeText}
            value={Value}
            editable={Editable}
            placeholder={placeholder}
          />
        </Content>
      ) : (
        <TextInput
          style={TextArea}
          textAlignVertical={'top'}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          maxLength={208}
          multiline={true}
        />
      )}
    </>
  );
};

export default Input;
