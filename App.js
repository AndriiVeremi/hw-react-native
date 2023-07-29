import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
// import RegistrationScreen from "./components/RegistrationScreen";

// import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

const fonts = () => Font.loadAsync({
  'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-m': require('./assets/fonts/Roboto-Medium.ttf'),
  'roboto-b': require('./assets/fonts/Roboto-Bold.ttf'),
})

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
    </View>
  );
}
