import { StyleSheet, View, Button, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';

const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <View style={{marginTop: 250}}>
      <Button
        title="Перейти в галерею"
        onPress={() =>
          navigation.navigate('Галерея', {name: 'User'})
        }
      />
      <Button
        style={styles.buttons}
        title="Перейти в контакты"
        onPress={() =>
          navigation.navigate('Контакты', {name: 'пользователя'})
        }
      />
    </View>
  );
};
const GalleryScreen = ({navigation, route}) => {
  return (
    <View>
        <Text style={styles.title}>Это галерея {route.params.name}</Text>
        <Gallery />
    </View>
  );
};
const ContactScreen = ({navigation, route}) => {
  return (
    <View>
        <Text style={styles.title}>Это контакты {route.params.name}</Text>
        <Contacts />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Главная"
            component={HomeScreen}
            options={{title: 'Главное меню'}}
          />
          <Stack.Screen name="Галерея" component={GalleryScreen} />
          <Stack.Screen name="Контакты" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
  },
  buttons: {
      marginTop: 20,
  }
});
