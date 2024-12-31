import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { ButtonText, Container, LottieAnimation, PressableButton } from './styles';

export default function App() {
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
        source={require('./assets/fireworks.json')} 
        loop
        resizeMode='cover'
      />
    </>   
  );
}
