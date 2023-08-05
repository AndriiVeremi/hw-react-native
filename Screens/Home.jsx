import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontWeight: 500,
          fontSize: 17,
        },
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 20,
          width: 70,
          height: 40,
          marginRight: "2%",
        },
        tabBarStyle: {
          paddingTop: 9,
          justifyContent: "center",
          paddingLeft: "25%",
          paddingRight: "25%",
          paddingBottom: 32,
          height: 83,
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Login")}
            />
          ),
          tabBarActiveBackgroundColor: "#FFFFFF",
          tabBarIcon: ({ size }) => (
            <Feather name="grid" color="#BDBDBD" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121CC"
              onPress={() => {
                navigation.navigate("Home", {
                  screen: "Posts",
                });
              }}
            />
          ),
          tabBarStyle: { display: "none" },
          tabBarIconStyle: {
            width: 70,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#FF6C00",
          },
          tabBarIcon: ({ size }) => (
            <Feather name="plus" color="#FFFFFF" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: ({ size }) => (
            <Feather
              name="user"
              size={size}
              color="#BDBDBD"
            />
          ),         
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
