import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";

export default function MapComponent({ height }) {
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 48.866667 + i,
      longitude: 2.333333,
    });
  }
  return (
    <View>
      <MapView
        style={{ height: height }}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        region={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* <Circle center={} radius={30} strokeColor="blue" fillColor="red" /> */}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
  },
});
