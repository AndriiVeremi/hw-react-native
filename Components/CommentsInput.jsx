import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

const InputWithButton = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput style={styles.input} placeholder="Коментувати..." />
        <View style={styles.arrowContainer}>
          <Ionicons
            name="arrow-up"
            size={25}
            color="#fff"
            style={styles.arrow}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
  },
  inputFocused: {
    backgroundColor: "white",
    borderColor: "#FF6C00",
  },
  arrowContainer: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    position: "absolute",
    top: 10,
    right: 10,
  },
  arrow: {
    position: "absolute",
    top: 4,
    right: 4,
  },
});

export default InputWithButton;
