import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";



const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [geocode, setGeocode] = useState(null);
  const [isBtnActive, setBtnActive] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (!location) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }
        const loc = await Location.getCurrentPositionAsync({});
        setGeocode(loc);
        const grantedLocation = await Location.reverseGeocodeAsync(loc.coords);
        const country = grantedLocation[0]["country"];
        const city = grantedLocation[0]["city"];
        setLocation(`${country}, ${city}`);
      })();
    }
  }, [location]);

  useEffect(() => {
    if (name && location) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [name, location]);

  const reset = () => {
    setPhotoUri(null);
    setName("");
    setLocation("");
  };

  const onSubmit = () => {
    const newPost = {
      id: Date.now(),
      name,
      location: {
        geo: geocode,
        name: location,
      },
      imageUrl: photoUri,
      likes: 0,
      comments: [],
    };
    
    console.log("тут маю задіспатчити пост newPost")
    reset();
  };

  if (hasPermission === false || hasPermission === null) {
    return <Text>No access to camera</Text>;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            {photoUri && (
              <ImageBackground
                source={{ uri: photoUri }}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={styles.photoButton}
                  onPress={() => {
                    setPhotoUri(null);
                  }}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </ImageBackground>
            )}

            {!photoUri && (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <MaterialIcons
                      name="flip-camera-android"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.photoButton}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        setPhotoUri(uri);
                      }
                    }}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </View>
              </Camera>
            )}
          </View>

          {photoUri ? (
            <Text style={styles.text}>Редагувати фото</Text>
          ) : (
            <Text style={styles.text}>Завантажте фото</Text>
          )}
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Назва..."
          ></TextInput>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              paddingLeft={28}
              placeholder="Місцевість..."
              value={location}
              onChangeText={setLocation}
            ></TextInput>
            <Feather style={styles.inputIcon} name="map-pin" size={24} />
          </View>

          <Pressable
            style={isBtnActive ? styles.activeButton : styles.disabledButton}
            disabled={isBtnActive ? false : true}
          >
            <Text
              style={
                isBtnActive
                  ? styles.buttonTextActive
                  : styles.buttonTextDisabled
              }
              onPress={() => {
                onSubmit();
                navigation.navigate("Posts");
              }}
            >
              Опублікувати
            </Text>
          </Pressable>

          <Pressable
            style={styles.deleteWrapper}
            onPress={() => {
              reset();
              navigation.navigate("Posts");
            }}
          >
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

  photoContainer: {
    overflow: "hidden",
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

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    color: "#212121",
    fontSize: 16,
  },

  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 50,
    marginBottom: 16,
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

  buttonTextActive: {
    fontSize: 16,
    color: "#ffffff",
  },

  buttonTextDisabled: {
    fontSize: 16,
    color: "#BDBDBD",
  },

  deleteWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginTop: 130,
  },

  deleteIcon: {
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
