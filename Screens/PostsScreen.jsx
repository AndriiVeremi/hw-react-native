import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <View style={styles.wrap}>
            <Image
              style={styles.imgAvatar}
              source={require("../assets/Images/avatar.jpg")}
            />
            <View style={styles.mainText}>
              <Text style={styles.name}>Natali Romanova</Text>
              <Text style={styles.email}>email@example.com</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.wrapperImg}>
              <Image
                style={styles.img}
                source={require("../assets/Images/img1.jpg")}
              />
            </View>
            <Text style={styles.itemName}>Ліс</Text>
            <View style={styles.itemInfoContent}>
              <View style={styles.itemInfo}>
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.comitText}>0</Text>
              </View>
              <View style={styles.itemInfo}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.mapText}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.wrapperImg}>
              <Image
                style={styles.img}
                source={require("../assets/Images/img2.jpg")}
              />
            </View>
            <Text style={styles.itemName}>Захід на Чорному морі</Text>
            <View style={styles.itemInfoContent}>
              <View style={styles.itemInfo}>
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.comitText}>0</Text>
              </View>
              <View style={styles.itemInfo}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.mapText}>Odessa Region, Ukraine</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {

  },
  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: "100%",
  },
  wrap: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  mainText: {
    color: "#212121",
    fontFamily: "Roboto",
    alignSelf: "center",
  },
  name: { fontSize: 13, fontWeight: 600 },
  email: { fontSize: 11, fontWeight: 500 },
  item: {
    width: "92%",
    height: 299,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperImg: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  contentName: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-medium",
    color: "#212121",
  },
  itemInfoContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  comitText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "roboto-regular",
    color: "#BDBDBD",
  },
  mapText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "roboto-regular",
    color: "#212121",
    textDecorationLine: "underline",
  },
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
