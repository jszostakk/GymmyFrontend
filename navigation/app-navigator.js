import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomePage from "../pages/welcome-page";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
