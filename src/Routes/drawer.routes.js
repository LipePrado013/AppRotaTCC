import { StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabRoutes from "./Tab.Routes";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Map from "../pages/Map";
import Locais from "../pages/Local";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            // headerShown: false,
            title: '',
            headerTintColor: '#fff',
            drawerActiveTintColor: '#16FA9F',
            drawerInactiveTintColor: '#fff',
            drawerStyle: {
                backgroundColor: "#121212",
                color: '#00f',
            },
            headerStyle: {
                backgroundColor: "#121212",
            }
        }}>
            <Drawer.Screen
                name='home'
                component={TabRoutes}
                options={{

                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />
                }}
            />

            <Drawer.Screen
                name='mapa'
                component={Map}
                options={{
                    drawerLabel: 'Mapa',
                    drawerIcon: ({ color, size }) => <FontAwesome5 name="map-marked-alt" size={size} color={color} />
                }}
            />

            <Drawer.Screen
                name='locais'
                component={Locais}
                options={{
                    drawerLabel: 'Locais',
                    drawerIcon: ({ color, size }) => <Entypo name="location-pin" size={size} color={color} />

                }}
            />
            <Drawer.Screen
                name='login'
                component={Login}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: ({ color, size }) => <Entypo name="user" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name='cadastrar'
                component={Cadastro}
                options={{
                    drawerLabel: 'Cadastrar',
                    drawerIcon: ({ color, size }) => <Entypo name="add-user" size={size} color={color} />
                }}
            />
        </Drawer.Navigator>
    )

}
// const styles = StyleSheet.create({
//     Drawer: {
//         backgroundColor:'blue',
//     }
// });