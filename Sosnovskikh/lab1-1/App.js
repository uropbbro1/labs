import { Text, StyleSheet, View } from 'react-native';

import PostCard from './components/PostCard.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Журнал Bright</Text>
      <PostCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  }
});
