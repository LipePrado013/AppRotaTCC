import React from 'react';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function Map() {
  // const route = useRoute()
  // const local = route.params.local

  // const lat = local.lat_local
  // const lon = local.lon_local

  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      // console.log('local atual ', currentPosition)
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      // console.log('nova localização', response)
      setLocation(response)
    })
  }, [])

  return (
    <View style={styles.container}>

      {
        location &&
        <MapView style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
          {/* <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          /> */}


        </MapView>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
