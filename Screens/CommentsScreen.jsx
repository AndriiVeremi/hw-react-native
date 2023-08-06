import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const CommentsScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.img}
            source={require("../assets/Images/img1.jpg")}
          />

          <View style={styles.commentWrapper}>
            <Image
              style={styles.avatarUser}
              source={require("../assets/Images/avatarUser.jpg")}
            />
            <View style={{ ...styles.comment, marginLeft: 44 }}>
              <Text style={styles.commentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={{ ...styles.dataText, textAlign: "right" }}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>

          <View style={styles.commentWrapper}>
            <Image
              style={styles.avatar}
              source={require("../assets/Images/avatar.jpg")}
            />
            <View style={{ ...styles.comment, marginRight: 44 }}>
              <Text style={styles.commentText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={{ ...styles.dataText, textAlign: "left" }}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
          </View>

          <View style={styles.commentWrapper}>
            <Image
              style={styles.avatarUser}
              source={require("../assets/Images/avatarUser.jpg")}
            />
            <View style={{ ...styles.comment, marginLeft: 44 }}>
              <Text style={styles.commentText}>
              Thank you! That was very helpful!
              </Text>
              <Text style={{ ...styles.dataText, textAlign: "right" }}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>
          </ScrollView>
          
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
            />
            <Feather
              name="arrow-up"
              size={34}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 34,
                height: 34,
                borderRadius: 50,
                backgroundColor: "#FF6C00",
                color: "#FFFFFF",
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginBottom: 32,
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  commentWrapper: {
    width: "96%",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  avatarUser: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  avatar: {
    position: "absolute",
    top: 0,
    right: -10,
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  comment: {
    width: "90%",
    padding: 16,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "#00000008",
  },
  commentText: {
    marginBottom: 8,
    fontFamily: "roboto-regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dataText: {
    fontFamily: "roboto-regular",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
  form: {
    width: "92%",
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontFamily: "roboto-regular",
  },
});

export default CommentsScreen;
