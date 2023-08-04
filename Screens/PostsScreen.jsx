import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.wrap}>
            <Image
              style={styles.img}
              source={require("../assets/Images/Avatar.jpg")}
            />
            <View style={styles.mainText}>
              <Text style={styles.name}>Natali Romanova</Text>
              <Text style={styles.email}>email@example.com</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    justifyContent: "space-around",
  },

  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 665,
  },

  wrap: {
    flexDirection: "row",
    gap: 8,
  },

  mainText: {
    color: "#212121",
    fontFamily: "Roboto",
    alignSelf: "center",
  },

  name: { fontSize: 13, fontWeight: 600 },
  email: { fontSize: 11, fontWeight: 500 },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    height: 83,
    alignItems: "center",
  },

  buttonLink: {
    color: "#FF6C00",
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    marginHorizontal: 31,
  },
});

export default PostsScreen;
