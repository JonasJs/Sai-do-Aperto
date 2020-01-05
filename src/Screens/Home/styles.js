import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
export const Text = styled.Text`
  font-family: 'Lato-Bold';
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.46px;
  color: #000000;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export const PinMyPosition = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10;
  background: #3b48ee;
`;

export const Modal = styled.Modal`
  width: 100%;
  height: 70%;
  background: #fff;
  position: absolute;
  bottom: 0;
  text-align: left;
  padding: 20px;
`;
export const ModalContent = styled.View`
  width: 100%;
  height: 60%;
  background: #fff;
  position: absolute;
  bottom: 0;
  text-align: left;
  padding: 20px;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
`;

export const ItemsDetails = styled.View`
  flex-direction: column;
`;

export const Items = styled.View`
  flex-direction: column;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const AndressText = styled.Text`
  font-family: 'Lato-Bold';
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.36px;
  color: #181f4d;
  flex: 1;
`;

export const DurationText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.36px;
  color: #181f4d;
`;

export const DescriptionText = styled.Text`
  font-family: 'Lato-Regular';
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.42px;
  color: #474b66;
  margin-bottom: 24px;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: #e6e8f0;
  margin: 16px 0;
`;
export const AddBathroom = styled.View`
  position: absolute;
  bottom: 10;
  right: 20;
  background: #fff;
  border-radius: 25;
`;
