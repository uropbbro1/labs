import { View, Text, StyleSheet } from 'react-native';
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome user!</Text>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Select "Register" in navigation bar to register!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500
  },
});