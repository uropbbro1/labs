import { Text, View, StyleSheet, Image, Linking } from 'react-native';

export default function PostCard() {
  return (
    <View style={styles.container}>
      
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