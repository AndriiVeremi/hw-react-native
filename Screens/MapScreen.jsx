import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const MapScreen = ({ route }) => {
  const { location } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.082,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;


