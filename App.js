import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import { store, persistor } from "./redux/store";
// import { selectLoginState } from "./redux/auth/selectors";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { auth } from './config';
import { updateProfile } from "firebase/auth";

import Registration from "./Screens/RegistrationScreen";
import Login from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import Profile from "./Screens/ProfileScreen";
import Comments from "./Screens/CommentsScreen";
import Map from "./Screens/MapScreen";
import Posts from "./Screens/PostsScreen";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        const uid = user.uid;
        const data = {
          userId: user.uid,
          login: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        // const data = await getUserData(uid);
        // console.log(date)
        dispatch(updateProfile({ ...data, uid }));

        // navigation.navigate("Home");
        console.log("головна");
        setIsLogged(true);
      } else {
        console.log("логін");
        // navigation.navigate("Login");
        setIsLogged(false);
      }
    });
  }, []); // {isLogged ? "Home" : "Login"}

  //--------------------------------------------

  // const [initialRouteName, setInitialRouteName] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) =>
  //     setInitialRouteName(user ? "Home" : "Login")
  //   );
  // }, []);

  // console.log("стан -->", initialRouteName)

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={isLogged ? "Home" : "Login"}>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <MainStack.Screen name="Posts" component={Posts} />
        <MainStack.Screen name="Comments" component={Comments} />
        <MainStack.Screen name="Map" component={Map} />
        <MainStack.Screen name="Profile" component={Profile} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
