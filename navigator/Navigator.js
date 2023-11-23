import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstView from '../components/login/FirstView';
import LoginView from '../components/login/LoginView';
import RegisterView from '../components/login/RegisterView';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstView" component={FirstView} />
        <Stack.Screen name="LoginView" component={LoginView} />
        <Stack.Screen name="RegisterView" component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
