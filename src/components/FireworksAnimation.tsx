import React, { useRef } from "react";
import LottieView from 'lottie-react-native';
import { ButtonText, Container, LottieAnimation, PressableButton } from './styles';

export const FireworksAnimation = () => {
  const fireworksRef = useRef<LottieView>(null);

  function triggerFireworks() {
    if (fireworksRef.current) {
      fireworksRef.current.play(0);
    }
  }

  return (
    <>
      <Container>
        <PressableButton onPress={triggerFireworks}>
          <ButtonText>Happy New Year</ButtonText>
        </PressableButton>
      </Container>
      <LottieAnimation 
        ref={fireworksRef}
        source={require('../../assets/fireworks.json')} 
        loop={false}
        resizeMode='cover'
      />
    </>   
  );
}
