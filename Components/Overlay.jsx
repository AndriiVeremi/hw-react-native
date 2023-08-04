import { Image, StyleSheet, View } from "react-native";

const Overlay = ({ top }) => {
  const imageStyle = StyleSheet.compose(styles.overlay, {
    marginTop: top,
  });

  return <View style={imageStyle} />;
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#fff",
    width: 390,
    height: 710,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default Overlay;