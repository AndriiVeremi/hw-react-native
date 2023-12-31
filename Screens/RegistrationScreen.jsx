import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { register } from "../redux/auth/operations";
import { selectAuthError } from "../redux/auth/selectors";
import { AntDesign } from "@expo/vector-icons";
import BackgroundImage from "../assets/Images/photoBG.jpg";
import * as ImagePicker from "expo-image-picker";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Animated,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";

const onFocusStyle = {
  borderColor: "#FF6C00",
  color: "#212121",
  backgroundColor: "#FFFFFF",
};
const onBlurStyle = {
  borderColor: "#E8E8E8",
  color: "#BDBDBD",
  backgroundColor: "#F6F6F6",
};

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginInputStyles, setLoginInputStyles] = useState({ ...onBlurStyle });
  const [emailInputStyles, setEmailInputStyles] = useState({ ...onBlurStyle });
  const [passwordInputStyles, setPasswordInputStyles] = useState({
    ...onBlurStyle,
  });
  const [isButtonActive, setButtonActive] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authError = useSelector(selectAuthError);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onRegister = () => {
    if (!profilePhoto) {
      Alert.alert("Please add profile photo");
      return;
    }
    if (email && password && login && profilePhoto) {
      dispatch(
        register({
          inputEmail: email,
          inputPassword: password,
          inputLogin: login,
          profilePhoto,
        })
      );
      Alert.alert(authError);
      if (authError) return;
      navigation.navigate("Home");
    }
  };

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    console.log(permissionResult);

    if (permissionResult.granted === false) {
      alert("Ви відмовилися дозволити цій програмі доступ до ваших фотографій!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (login && email && password) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [login, email, password]);

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
              <Animated.View style={styles.imageWrapper}>
                {profilePhoto && <Image source={{ uri: profilePhoto }} style={styles.profileImage}></Image>}
                <Pressable style={styles.addButton} onPress={showImagePicker}>
                  <AntDesign name="pluscircleo" size={25} style={styles.addBtn} />
                </Pressable>
              </Animated.View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={[styles.input, loginInputStyles]}
                onChangeText={setLogin}
                value={login}
                placeholder="Логін"
                onFocus={() => {
                  setLoginInputStyles({ ...onFocusStyle });
                }}
                onBlur={() => {
                  setLoginInputStyles({ ...onBlurStyle });
                }}
              />
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
                onPress={onRegister}
              >
                <Text style={isButtonActive ? styles.buttonTextActive : styles.buttonTextDisabled}>
                  Зареєструватися
                </Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
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
    height: 549,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    marginTop: "auto",
    paddingTop: 92,
  },
  imageWrapper: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    width: 26,
    height: 26,
    right: -12,
    top: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    color: "#FF6C00",
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
    right: 40,
    top: 14,
  },
});

export default RegistrationScreen;
