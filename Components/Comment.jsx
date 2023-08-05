import { StyleSheet, Text, View, Image } from "react-native";

export function OtherComment() {
  return (
    <View style={styles.person}>
      <Image
        style={styles.imgAvatar}
        source={require("../assets/Images/avatar.jpg")}
      />
      <View style={styles.text}>
        <Text style={styles.content}>Текст</Text>
        <Text style={styles.dateTime}>25.02.11 | 12:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  person: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 24,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  text: {
    width: 300,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  content: {
    color: "#212121",
    fontWeight: "400",
    fontSize: 13,
    textAlign: "left",
    marginBottom: 10,
  },
  dateTime: {
    color: "#BDBDBD",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
  },
});

export function AdmComment() {
  return (
    <View style={style.person}>
      <View style={style.text}>
        <Text style={style.content}>Текст</Text>
        <Text style={styles.dateTime}>25.02.11 | 12:00</Text>
      </View>
      <Image
        style={styles.imgAvatar}
        source={require("../assets/Images/avatar.jpg")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  person: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 24,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  text: {
    width: 300,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  content: {
    color: "#212121",
    fontWeight: "400",
    fontSize: 13,
    textAlign: "left",
    marginBottom: 10,
  },
  dateTime: {
    color: "#BDBDBD",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
  },
});
