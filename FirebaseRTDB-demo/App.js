import { StyleSheet, View } from 'react-native';
import SaveData from './src/saveData';
import FetchData from './src/fetchData';

export default function App() {
  return (
    <View style={styles.container}>
      <SaveData />
      <FetchData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


