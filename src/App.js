import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGameScreen } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StartGameScreen/>
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
