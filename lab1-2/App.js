import { Text, StyleSheet, View } from 'react-native';

import PostCard from './components/PostCard.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 книжных новинок октября</Text>
      <View style={styles.block1}>
        <Text style={styles.block1Text}>«Кадиш.com» Натан Ингландер.
        Издательство «Книжники»</Text>
      </View>
      <View style={styles.block2}>
        <Text style={styles.block2Text}>
          Ироничная новелла Натана Инландера, две
          личные истории культовой Патти Смит,{"\n"}
          репортаж британской журналистки о будущем
          человечества дебютный роман Оушена{"\n"}
          Вуонга и журналистское расследование о
          создании «Моссада». В нашей подборке
          рассказываем о пяти захватывающих книжных
          новинках, которые достойны того, чтобы
          появиться на ваших полках.
        </Text>
      </View>
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
  },
  block1: {
    width: '100%',
    padding: 0,
    margin: 0,
    height: 120,
    backgroundColor: '#d3d3d3',
  },
  block1Text: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  block2: {
    width: '100%',
    padding: 0,
    margin: 0,
    height: 500,
    backgroundColor: '#a9a9a9',
  },
  block2Text: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    marginStart: 10,
    marginEnd: 10,
  }
});
