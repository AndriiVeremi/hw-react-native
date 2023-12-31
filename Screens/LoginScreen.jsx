import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { login } from "../redux/auth/operations";
import BackgroundImage from "../assets/Images/photoBG.jpg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";

const onFocusStyle = { borderColor: "#FF6C00", color: "#212121", backgroundColor: "#FFFFFF" };
const onBlurStyle = { borderColor: "#E8E8E8", color: "#BDBDBD", backgroundColor: "#F6F6F6" };

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailInputStyles, setEmailInputStyles] = useState({ ...onBlurStyle });
  const [passwordInputStyles, setPasswordInputStyles] = useState({ ...onBlurStyle });

  const [isButtonActive, setButtonActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {      
        navigation.navigate("Home");       
      } 
    });
  }, []);

  const reset = () => {
    setEmail("");
    setPassword("");
    setButtonActive(false)
  };

  const onLogin = () => {
    if (email && password) {
      dispatch(
        login({
          inputEmail: email,
          inputPassword: password,
        })
      ).then((response) => {
        if (response.type === "auth/login/fulfilled") {
          navigation.navigate("Home");
          Alert.alert(`${email}, Ви успішно увійшли!`);
          reset();
        } else {
          return Alert.alert("Помилка", `Введений неправильний логін або пароль. Будь ласка, перевірте, чи правильно введені дані.`);
        }
      });
    }
  };

  useEffect(() => {
    if (email && password) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [email, password]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={BackgroundImage}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <View style={styles.box}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={[styles.input, emailInputStyles]}
                onChangeText={setEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
                onFocus={() => {
                  setEmailInputStyles({ ...onFocusStyle });
                }}
                onBlur={() => {
                  setEmailInputStyles({ ...onBlurStyle });
                }}
              />
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, passwordInputStyles]}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={showPassword ? false : true}
                  placeholder="Пароль"
                  onFocus={() => {
                    setPasswordInputStyles({ ...onFocusStyle });
                  }}
                  onBlur={() => {
                    setPasswordInputStyles({ ...onBlurStyle });
                  }}
                />
                <Pressable style={styles.showTextButton} onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.showText}>{showPassword ? "Сховати" : "Показати"}</Text>
                </Pressable>
              </View>
              <Pressable
                style={isButtonActive ? styles.activeButton : styles.disabledButton}
                disabled={isButtonActive ? false : true}
                onPress={onLogin}
              >
                <Text style={isButtonActive ? styles.buttonTextActive : styles.buttonTextDisabled}>Увійти</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.loginText}>Немає акаунту? Зареєструватися</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    position: "relative",
    height: 489,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    marginTop: "auto",
    paddingTop: 32,
  },
  title: {

    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    width: "90%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
  },
  activeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 51,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  disabledButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 51,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  buttonTextActive: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  buttonTextDisabled: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  loginText: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 43,
  },
  showText: {
    fontSize: 16,
    color: "#1B4371",
  },
  showTextButton: {
    position: "absolute",
    right: 36,
    top: 14,
  },
});

export default LoginScreen;
