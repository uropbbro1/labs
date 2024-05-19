import { Text, View, StyleSheet, Image, Linking } from 'react-native';

export default function PostCard() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'blue',marginTop: 20, marginLeft: 10}}
      onPress={() => Linking.openURL('http://google.com')}>
        Новости
      </Text>
      <Image
       style={styles.stretch}
       source={{
          uri: 'https://brightmagazine.ru/wp-content/uploads/2024/03/jenny-ueberberg-4TasyqJop_g-unsplash-600x400.jpg',
        }} />
        <Text style={styles.title}>Превращаем стресс в своего помощника</Text>
        <Text style={styles.paragraph}>
        С трудностями и вызовами сталкиваются все, но преодолеть их можно только, если есть внутренняя мотивация. Рассказываем, какие вопросы стоит себе задать, чтобы учиться на трудностях и двигаться дальше. 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 40,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 5,
  },
  title: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'justify',
    width: 300
  },
  stretch: {
    width: '85%',
    height: 150,
    resizeMode: 'stretch',
    marginTop: 30,
    marginLeft: 10,
    alignSelf: 'left',
  },
  paragraph: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 16,
    fontWeight: '300',
  },
});