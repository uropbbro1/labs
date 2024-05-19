import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration</Text>
      <TextInput placeholder="login" style={styles.textInput}/>
      <TextInput placeholder="password" style={styles.textInput}/>
      <Button title="register"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 500
  },
  textInput: {
    marginStart: 'auto',
    marginEnd: 'auto',
    marginTop: 20,
    marginBottom: 0
  },
});