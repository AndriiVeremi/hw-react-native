import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const CommentsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main}>
        <View style={styles.parent}>
          <Image
            style={styles.photo}
            source={require("../assets/Images/img1.jpg")}
          />
          <View style={{ marginTop: 32 }}>
            <View
              avatar={require("../assets/Images/avatarUser.jpg")}
              content="Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
              date="09 червня, 2020"
              time="08:40"
            />
            <View
              avatar={require("../assets/Images/avatar.jpg")}
              content="A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
              date="09 червня, 2020"
              time="09:14"
            />
            <View
              avatar={require("../assets/Images/avatarUser.jpg")}
              content="Thank you! That was very helpful!"
              date="09 червня, 2020"
              time="09:20"
            />
          </View>
          <View
            style={{
              paddingBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
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
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderWidth: 1,
  },
  parent: {
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default CommentsScreen;
