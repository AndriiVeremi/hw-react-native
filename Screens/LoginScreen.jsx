import React from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import LoginForm from "../Components/LoginForm";

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Images/photoBG.jpg")}
      style={styles.bgImage}
    >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <LoginForm />
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
});

export default LoginScreen;
