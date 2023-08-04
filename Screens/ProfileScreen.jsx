import {
  View,
  ScrollView,
  FlatList,
  Pressable,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";

const Item = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentBlock}>
        <Image
          style={styles.contentImg}
          source={require("../assets/Images/img1.jpg")}
        />
      </View>
      <Text style={styles.contentName}>Ліс</Text>
      <View style={styles.contentDetails}>
        <View style={styles.contentDetail}>
          <Feather
            name="message-circle"
            size={24}
            color="#FF6C00"
            onPress={() => navigation.navigate("Comments")}
          />
          <Text style={styles.commentText}>50</Text>
          <Feather name="thumbs-up" size={24} color="#FF6C00" />
          <Text style={styles.commentText}>200</Text>
        </View>
        <View style={styles.contentDetail}>
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            onPress={() => navigation.navigate("Map")}
          />
          <Text style={styles.mapText}>Poland</Text>
        </View>
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

          <FlatList
              // data={fetchedPosts}
              renderItem={({ item }) => (
                <Item
                  title={item.name}
                  commentsAmount={item.comments.length}
                  imageUrl={item.imageUrl}
                  location={item.location.name}
                  likesAmount={item.likes}
                  onPressComments={() => {
                    navigation.navigate("Comments", { postId: item.id });
                  }}
                  onPressMap={() => {
                    navigation.navigate("Map", { location: item.location.geo.coords });
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
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
    // font-family: Roboto;
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },

  contentContainer: {
    width: "92%",
    height: 299,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 240,
    // justifyContent: "center",
    // alignItems: "center",
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
    // width: "90%",
    // marginBottom: 32,
  },
  contentDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginRight:25,
    // width: "90%",
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
