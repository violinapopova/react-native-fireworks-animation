import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

export const PressableButton = styled.Pressable`
  padding: 10px;
  background-color: transparent;
`;

export const ButtonText = styled.Text`
  color: gold;
  font-size: 30px;
  font-weight: bold;
`;

export const LottieAnimation = styled(LottieView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  pointer-events: none;
`;