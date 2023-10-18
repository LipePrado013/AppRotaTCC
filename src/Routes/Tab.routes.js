import React, { isValidElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  Foundation
} from '@expo/vector-icons';

import Home from "../pages/Home";
import Map from "../pages/Map";
import Pesquisa from "../pages/Pesquisa";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
  const route = useRoute()

  return (

    <>

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#16FA9F",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#121212",
          borderTopWidth: 0,
          left: 14,
          right: 14,
          bottom: 14,
          borderRadius: 30,
          height: 60
        }
      }}>
        <Tab.Screen name='home' component={Home} options={{
          headerShown: false /*, tabBarBadge: 6 [balão indicador ]*/, tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="home" size={size} color={color} />
            }
            return <AntDesign name="home" size={size} color={color} />
          }
        }} />

        <Tab.Screen name='pesquisa' component={Pesquisa} options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Foundation name="magnifying-glass" size={size} color={color} />
            }
            return <Foundation name="magnifying-glass" size={size} color={color} />
          }
        }} />

        <Tab.Screen name='maps' component={Map} options={{

          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="map-marked-alt" size={size} color={color} />
            }
            return <FontAwesome5 name="map-marked-alt" size={size} color={color} />
          }
        }} />


      </Tab.Navigator >
    </>
  )
}
