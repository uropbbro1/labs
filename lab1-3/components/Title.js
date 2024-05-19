import { Text, View, StyleSheet } from 'react-native';

export default function title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check.Check</Text>
      <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>тщательно подобранная коллекция компаний</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
