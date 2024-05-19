import {
  StyleSheet,
  View,
} from "react-native";
import NavigationContainer from './components/NavigationContainer';
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});