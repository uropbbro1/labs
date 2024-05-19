import { StyleSheet, View, Image } from 'react-native';
import CompaniesLogo from './components/CompaniesLogo';
import Title from './components/Title';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <CompaniesLogo />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
});
