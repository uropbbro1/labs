import Icon from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Text, View, Button, TextInput, Image, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Stack = createNativeStackNavigator();

const SignScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
        <Image source={{
          uri: 'https://vip-1gl.ru/vipberrrt/10423beautiful_scenery_wallpaper.jpg',
        }} style={{ width: '100%', height: '40%'}}/>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: 20
          }}>
          Регистрация
        </Text>
        <Text
          style={{
            marginHorizontal: 55,
            fontFamily: 'Regular',
            textAlign: 'center',
            opacity: 0.4,
            marginTop: 20
          }}>
          Введите свои персональные данные для повышения персонализации.{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 55,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            marginTop: 30,
            paddingVertical: 2,
          }}>
          <Icon name="mail" color="00716F" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 55,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 2,
          }}>
          <TextInput style={{ paddingHorizontal: 10 }} placeholder="Пароль" />
        </View>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
          }}>
          <Button
            title="Зарегистрироваться"
            onPress={() => Alert.alert(
          'Вы успешно зарегистрировались',)
          }/>
        </View>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            marginTop: 20
          }}>
          <Button
            title="Уже есть есть аккаунт? Войти."
            onPress={() =>
              navigation.navigate('Login', {name: 'Jane'})
            }
          />
        </View>
      </View>
  );
};

const LoginScreen = ({navigation, route}) => {
  return(
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
        <Image source={{
          uri: 'https://vip-1gl.ru/vipberrrt/10423beautiful_scenery_wallpaper.jpg',
        }} style={{ width: '100%', height: '40%'}}/>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'SemiBold',
            alignSelf: 'center',
            marginTop: 20
          }}>
          Вход
        </Text>
        <Text
          style={{
            marginHorizontal: 55,
            fontFamily: 'Regular',
            textAlign: 'center',
            marginTop: 30,
            opacity: 0.4,
          }}>
          Введите свои персональные данные для повышения персонализации.{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 55,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            marginTop: 30,
            paddingVertical: 2,
          }}>
          <Icon name="mail" color="00716F" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 55,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            marginTop: 20,
            paddingVertical: 2,
            marginBottom: 20
          }}>
          <TextInput style={{ paddingHorizontal: 10 }} placeholder='Пароль' />
        </View>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
          }}>
          <Button title="Войти"
          onPress={() => Alert.alert(
          'Вы успешно вошли',)
          }>
          </Button>
          <View style={{marginTop: 20}}/>
          <Button title="Еще нет аккаунта? Зарегистрироваться!"
          onPress={() =>
              navigation.navigate('SignIn')
            }>
          </Button>
        </View>
      </View>
  );
};

export default class App extends React.Component{
  state = {
    isFontLoaded: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/collapen_.otf'),
      'Medium' : require('./src/fonts/qlassikmedium.ttf'),
      'Regular' : require('./src/fonts/collapen_.otf')
    });
    this.setState({isFontLoaded: true});
  }

  render(){
    return(
      (this.state.isFontLoaded === true) ? (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (AppLoading)
    );
  }
}