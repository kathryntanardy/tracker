import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeHeader from './components/WelcomeHeader';
import Tracker from './components/Tracker';

export default function App() {
  return (
    <View style={styles.container}>
        <WelcomeHeader/>
        <Tracker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
