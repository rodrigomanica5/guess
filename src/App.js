import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { Game, StartGameScreen } from './screens';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)

  const onHandleStartGame = (numberConfirmed) => {
    setUserNumber(numberConfirmed)
  }

  const screenSwitch = () => {
    (userNumber)
    ? <Game/>
    : <StartGameScreen onHandleStartGame={onHandleStartGame} />
  }

  return (
    <View style={styles.container}>
      <Header />
      {screenSwitch}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
