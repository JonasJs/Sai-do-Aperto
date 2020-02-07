import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width / 2 - 40);

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
export const Text = styled.Text`
  font-family: 'Lato-Bold';
  text-transform: uppercase;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.46px;
  color: #fff;
`;

export const CapturePhotoButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 60px;
  position: absolute;
  bottom: 50;
  z-index: 1;
  background: #fff;
  left: ${screenWidth};
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background: #fff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const ButtonPhoto = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 10px 0;
  border-radius: 5px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0 5%;
  flex: 1;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const P = styled.Text`
  font-size: 16px;
  font-family: 'Lato-Bold';
  margin-bottom: 16px;
  color: #394064;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 24px;
  font-family: 'Lato-Bold';
  margin-top: 32px;
  margin-bottom: 40px;
  color: #394064;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
