import {
  View,
  ScrollView,
  Pressable,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";

const Item = (item) => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <Image
        style={styles.postImage}
        source={require("../assets/Images/img1.jpg")}
      ></Image>
      <Text style={styles.postText}>Ліс</Text>
      <View style={styles.addInfoWrapper}>
        <Pressable
          style={styles.commentLikesButton}
          onPress={() => navigation.navigate("Comments")}
        >
          <Feather
            style={{ color: "#FF6C00" }}
            name="message-circle"
            size={24}
          />
          <Text style={{ fontSize: 16, color: "#212121" }}>3</Text>
        </Pressable>

        <View style={styles.commentLikesButton}>
          <Feather style={{ color: "#FF6C00" }} name="thumbs-up" size={24} />
          <Text style={{ fontSize: 16, color: "#212121" }}>135</Text>
        </View>

        <Pressable
          style={styles.locationButton}
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Feather style={{ color: "#BDBDBD" }} name="map-pin" size={24} />
          <Text style={styles.locationText}>Ukraine</Text>
        </Pressable>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/photoBG.jpg")}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.box}>
          <View style={styles.img}>
            <Image
              style={styles.avatar}
              source={require("../assets/Images/photo.jpg")}
            />
            <AntDesign name="pluscircleo" size={24} style={styles.addBtn} />
          </View>
          <Pressable style={styles.logoutIcon} onPress={handleLogout}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </Pressable>
          <Text style={styles.heading}>Natali Romanova</Text>
          <Item />
          <Item />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    marginTop: 147,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },
  img: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 33,
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 75,
    right: -12,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    color: "#FF6C00",
  },
  logoutIcon: {
    position: "absolute",
    right: 16,
    top: 22,
    width: 24,
    height: 24,
  },
  post: {
    width: "100%",
    height: 299,
    marginBottom: 32,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
  addInfoWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentLikesButton: {
    display: "flex",
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 24,
  },
  locationButton: {
    display: "flex",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "auto",
  },
  locationText: {
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },

  contentContainer: {
    width: "92%",
    height: 299,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  contentImg: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  contentName: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  contentDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  commentText: {
    marginLeft: 4,
    marginRight: 20,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  mapText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
