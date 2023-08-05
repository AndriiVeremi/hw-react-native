import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const RegistrationForm = ({ onPress }) => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formSubmit = () => {
    console.log(login);
    console.log(email);
    console.log(password);
    reset();
    navigation.navigate("Home");
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.input}
        placeholder="Логін"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={showPassword ? false : true}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
      />
      <Pressable onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.link}>{showPassword ? "Сховати" : "Показати"}</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={formSubmit}>
        <Text style={styles.buttonText}>Зареєстуватися</Text>
      </Pressable>

      <View style={styles.regesterContainer}>
        <Text style={styles.text}>Вже є акаунт?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Увійти</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    gap: 16,
  },

  title: {
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    fontWeight: 500,
  },

  input: {
    width: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    fontSize: 16,
  },

  link: {
    position: "absolute",
    top: -53,
    right: 16,
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#1B4371",
  },

  button: {
    width: "100%",
    marginTop: 43,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#FFFFFF",
  },

  regesterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },

  text: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationForm;
