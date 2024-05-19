import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomNavBar = ({ navigateTo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('TodoList')}>
        <Text>TodoList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    height: 50,
    width: '100%'
  }
});

export default CustomNavBar;