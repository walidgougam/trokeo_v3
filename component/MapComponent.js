import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function MapComponent({ height }) {
  //STATE
  const [region, setRegion] = useState({
    latitude: 48.866667,
    longitude: 2.333333,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
      console.log(location, "alors location --------");
    })();
  }, []);

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
        initialRegion={region}
        region={region}
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
