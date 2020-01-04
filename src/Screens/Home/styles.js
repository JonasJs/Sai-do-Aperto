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
  margin-bottom: 24px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  background: red;
`;
export const PinMyPosition = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10;
  background: #3b48ee;
`;

export const Modal = styled.View`
  width: 100%;
  height: 70%;
  background: #fff;
  position: absolute;
  bottom: 0;
  text-align: left;
  padding: 20px;
`;

export const Items = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AndressText = styled.Text`
  font-family: 'Lato-Bold';
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.36px;
  color: #181f4d;
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
