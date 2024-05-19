import { Text, View, StyleSheet } from 'react-native';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.text}>Андрей</Text>
        <Text style={styles.text}>+79822223456</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Игорь</Text>
        <Text style={styles.text}>+79826158721</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Сергей</Text>
        <Text style={styles.text}>+79035387706</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Александр</Text>
        <Text style={styles.text}>+79126663456</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Вячеслав</Text>
        <Text style={styles.text}>+79122754686</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Сантехник</Text>
        <Text style={styles.text}>+79025826197</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Электрик</Text>
        <Text style={styles.text}>+79755869070</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.text}>Монтажер</Text>
        <Text style={styles.text}>+79728456696</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
    padding: 20,
    borderWidth: 2,
    borderStartColor: 'white',
    borderEndColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  }
});
