// import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from "./Screens/Home";
import Profile from "./Screens/ProfileScreen";
import Comments from "./Screens/CommentsScreen";
import Map from "./Screens/MapScreen";
import Posts from "./Screens/PostsScreen";


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer style={styles.container}>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
        <MainStack.Screen name="Comments" component={Comments} />
        <MainStack.Screen name="Map" component={Map} />
        <MainStack.Screen name="Profile" component={Profile} />
        <MainStack.Screen name="Posts" component={Posts} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});