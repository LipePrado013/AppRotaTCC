import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";


export default function Apiteste() {

  const route = useRoute()
  const local = route.params.local


  return (
    <>


      <Text style={{
        fontWeight: '700',
        fontSize: 30,
        paddingTop: 50,
        textAlign: 'justify'
      }}>{local.nm_local}</Text>
      <Text style={{
        fontWeight: '700',
        fontSize: 17,
        textAlign: 'justify'
      }}>Latitude: {local.lat_local}</Text>
      <Text style={{
        fontWeight: '700',
        fontSize: 17,
        textAlign: 'justify'
      }}>Longitude: {local.lon_local}</Text>


    </>
  )
}