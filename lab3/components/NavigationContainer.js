import WelcomeScreen from './WelcomeScreen';
import Register from './Register';
import TodoList from './TodoList';
import { View } from 'react-native';
import CustomNavBar from './CustomNavBar';
import { useState } from "react";
const NavigationContainer = () => {
  const [currentPage, setCurrentPage] = useState('Home'); // Default page

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <WelcomeScreen />;
      case 'Register':
        return <Register />;
      case 'TodoList':
        return <TodoList />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomNavBar navigateTo={navigateTo} />
      {renderContent()}
    </View>
  );
};

export default NavigationContainer;