import React from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RegistrationForm from "../Components/RegistrationForm";

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Images/photoBG.jpg")}
      style={styles.bgImage}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={styles.avatar}
                source={require("../assets/Images/photo.jpg")}
              />
              <AntDesign
                name="pluscircleo"
                size={24}
                style={styles.addBtn}
              />
            </View>
            <RegistrationForm />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  keyboardAvoidingView: {
    flex: 1,
    marginTop: "auto",
  },

  container: {
    marginTop: "auto",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  img: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 132,
    height: 120,
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },

  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 85,
    right: 0,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    color: "#FF6C00",
  },
});

export default RegistrationScreen;
