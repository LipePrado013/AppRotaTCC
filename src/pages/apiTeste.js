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
        fontSize: 17,
        paddingTop: 30,
        textAlign: 'justify'
      }}>{local.lat_local}</Text>


    </>
  )
}