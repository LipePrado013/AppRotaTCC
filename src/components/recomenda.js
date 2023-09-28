import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { cards } from "../pages/Home";
import { useNavigation } from "@react-navigation/native";


const Recomendados = ({ navigation }) => {


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
            {cards.map((item, index) => (
                <TouchableOpacity style={{
                    backgroundColor: 'gray',
                    margin: 10,
                    width: 300,
                    height: 200,
                    borderRadius: 20,
                    overflow: 'hidden',

                }} onPress={() => navigation.navigate('locais', { item: item })}>
                    <Image source={item.image} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} />
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
                        <Text style={{ color: '#FFF', }}>{item.previa}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Recomendados;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 80,
    },
    toplop: {
        width: '100%',
        height: 150,
    },
    topText: {

    },
    h2: {

    },
    p2: {

    },
    img: {
        width: '100%',
        height: '100%'
    },
    conteudo: {
        display: 'flex',
        flexDirection: 'column',
        color: '#FFF',
        gap: 10, shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
    },
    CardList: {
        display: 'flex',
    },
    cardscont: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
    },
    cards: {

    },
    imgcard: {

    },
});