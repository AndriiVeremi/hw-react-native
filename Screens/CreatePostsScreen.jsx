import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { MaterialIcons, Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const photoUri = false;
  const isButtonActive = false;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Створити публікацію</Text>
          </View>

          <View style={styles.cameraContainer}>
            {photoUri && (
              <ImageBackground
                source={require("../assets/Images/photoBG.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <TouchableOpacity style={styles.photoButton}>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    // color={#BDBDBD}
                  />
                </TouchableOpacity>
              </ImageBackground>
            )}
            {!photoUri && (
              <View style={styles.camera}>
                <View style={styles.photoView}>
                  <TouchableOpacity style={styles.photoButton}>
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      // color={#BDBDBD}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          {photoUri ? (
            <Text style={styles.text}>Редагувати фото</Text>
          ) : (
            <Text style={styles.text}>Завантажте фото</Text>
          )}
          <TextInput style={styles.input} placeholder="Назва..."></TextInput>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              paddingLeft={28}
              placeholder="Місцевість..."
            ></TextInput>
            <Feather style={styles.inputIcon} name="map-pin" size={24} />
          </View>
          <Pressable
            style={isButtonActive ? styles.activeButton : styles.disabledButton}
            disabled={isButtonActive ? false : true}
          >
            <Text
              style={
                isButtonActive
                  ? styles.buttonTextActive
                  : styles.buttonTextDisabled
              }
            >
              Опублікувати
            </Text>
          </Pressable>
          <Pressable style={styles.deleteWrapper}>
            <Feather style={styles.deleteIcon} name="trash-2" size={24} />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingBottom: 22,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
    marginTop: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 17,
    color: "#212121",
    marginLeft: 100,
    paddingTop: 11,
    paddingBottom: 11,
    // textAlign: "center",
  },
  cameraContainer: {
    marginTop: 75,
    position: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  camera: { flex: 1, overflow: "hidden" },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignSelf: "flex-end",
  },
  photoButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -30 }],
    alignSelf: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 48,
    color: "#BDBDBD",

    fontSize: 16,
  },
  buttonTextActive: {
    fontSize: 16,
    color: "#ffffff",
  },
  buttonTextDisabled: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 50,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    color: "#212121",
    fontSize: 16,
  },
  inputIcon: {
    color: "#BDBDBD",
    position: "absolute",
    left: 0,
    bottom: 13,
  },
  activeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 51,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  disabledButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 51,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  deleteWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginTop: 150,
  },
  deleteIcon: {
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
