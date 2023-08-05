import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const MapScreen = () => {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="standard"
      >
        <Marker
          title="I am here"
          description="Hello"
        />
      </MapView>
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
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;