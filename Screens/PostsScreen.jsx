import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectUserId, selectUserLogin, selectUserEmail, selectUserPhoto } from "../redux/auth/selectors";
import { selectAllPosts } from "../redux/posts/selectors";
import { getPosts } from "../redux/posts/operations";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Item = ({ title, likesAmount, commentsAmount, location, imageUrl, onPressComments, onPressMap }) => {
  return (
    <View style={styles.post}>
      <Image style={styles.postImage} source={{ uri: imageUrl }}></Image>
      <Text style={styles.postText}>{title}</Text>
      <View style={styles.addInfoWrapper}>
        <TouchableOpacity style={styles.commentLikesButton} onPress={() => onPressComments()}>
          <Feather color={commentsAmount === 0 ? "#BDBDBD" : "#FF6C00"} name="message-circle" size={24} />
          <Text style={{ fontSize: 16, color: "#212121" }}>{commentsAmount}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.commentLikesButton}>
            <Feather color={likesAmount === 0 ? "#BDBDBD" : "#FF6C00"} name="thumbs-up" size={24} />
            <Text style={{ fontSize: 16, color: "#212121" }}>{likesAmount}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.locationButton} onPress={() => onPressMap()}>
          <Feather color={location === 0 ? "#BDBDBD" : "#FF6C00"} name="map-pin" size={24} />
          <Text style={styles.locationText}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const email = useSelector(selectUserEmail);
  const login = useSelector(selectUserLogin);
  const photo = useSelector(selectUserPhoto);
  const fetchedPosts = useSelector(selectAllPosts);

  useEffect(() => {
    if (!userId) return;
    dispatch(getPosts(userId));
  }, [userId]);

  // console.log(fetchedPosts);

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image style={styles.profilePhoto} source={{ uri: photo }}></Image>
        <View style={styles.profileTextWrapper}>
          <Text style={styles.profileName}>{login}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
      </View>
      {fetchedPosts.length > 0 && (
        <FlatList
          data={fetchedPosts}
          renderItem={({ item }) => (
            <Item
              title={item.name}
              commentsAmount={item.comments.length}
              likesAmount={item.likes}
              imageUrl={item.imageUrl}
              location={item.location.name}
              onPressComments={() => {
                navigation.navigate("Comments", { postId: item.id });
              }}
              onPressMap={() => {
                navigation.navigate("Map", {
                  location: item.location.geo.coords,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  post: {
    width: "100%",
    height: 299,
    marginBottom: 32,
  },
  postText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8,
  },
  profileWrapper: {
    width: "100%",
    marginBottom: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  profileTextWrapper: {},
  profileName: {
    fontSize: 13,
    fontWeight: 700,
  },
  profileEmail: {
    fontSize: 11,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
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
  addInfoIcon: {
    color: "#BDBDBD",
  },
  commentButton: {
    display: "flex",
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
});

export default PostsScreen;
