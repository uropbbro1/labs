import { Text, View, StyleSheet } from 'react-native';

export default function title() {
  return (
    <View style={styles.container}>
      <Text style={styles.itemsMain}>Главная</Text>
      <Text style={styles.items}>Заказы</Text>
      <Text style={styles.items}>Корзина</Text>
      <Text style={styles.items}>Профиль</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#242124',
    justifyContent: 'center',
    marginTop: 40,
    height: 50,
  },
  items: {
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
  },
  itemsMain: {
    color: 'white',
    marginTop: 10,
    marginLeft: 0,
    fontSize: 16,
  }
});
