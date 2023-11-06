import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { cards2Data } from "../pages/Home";
import { useNavigation } from "@react-navigation/native";


const Recomendados = () => {

    const navigation = useNavigation()
    return (
        <View>
            <FlatList data={cards2Data}
                renderItem={({ item }) =>
                    <Pressable onPress={() => navigation.navigate("local")}>
                        <TouchableOpacity style={{
                            width: '100%',
                            height: 150,
                            marginVertical: 10
                        }}>
                            <Image style={{
                                width: '100%',
                                height: '100%'
                            }} source={item.image} />
                            <View style={{
                                position: 'absolute',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '100%',
                                height: '100%',
                                padding: 10,
                                backgroundColor: '#000000ae'
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                }}>{item.titulo}</Text>
                                <Text style={{
                                    color: '#fff'
                                }}>{item.descricao}</Text>
                            </View>
                        </TouchableOpacity>


                    </Pressable>
                } />
        </View>
    )
}

export default Recomendados;

const styles = StyleSheet.create({});