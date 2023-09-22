import Animated from 'react-native-reanimated';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native";
import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'
import img2 from '../assets/img/Aquario.png'


import './Home.css'
import { Component } from 'react';

const cards2 = [
    {//descrição limite de 128 Caracteres. AVISO
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'inaugurado em 1998',
        // type: 0
    },
    {//descrição limite de 128 Caracteres. AVISO
        id: 2,
        image: img1,
        titulo: 'museu do café',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'inaugurado em 1998',
        // type: 0
    },

]
const cards = [
    {//descrição limite de 128 Caracteres. AVISO
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'inaugurado em 1998',
        // type: 0
    },
    {//descrição limite de 128 Caracteres. AVISO
        id: 2,
        image: img1,
        titulo: 'museu do café',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'inaugurado em 1998',
        // type: 0
    },
    {//descrição limite de 128 Caracteres. AVISO
        id: 3,
        image: img2,
        titulo: 'Aquario',
        descricao: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record.',
        data: 'inaugurado em 1998',
        // type: 0
    },
]

export default function Home({ navigation }) {

    return (
        <>
            <ScrollView >
                <View style={styles.titles}>
                    <h2>
                        recomendações
                    </h2>
                </View>
                <View style={styles.container}>{/*  container */}

                    <View style={styles.conteudo}>

                        <a style={styles.conteudo} >

                            {cards2.map((card) => (

                                <TouchableOpacity style={styles.toplop} onPress={() => { navigation.navigate('local') }}>
                                    <Image style={styles.img} source={card.image} />
                                    <div className="btnRecomendacao">
                                        <h2>{card.titulo}</h2>
                                        <p>{card.descricao}</p>
                                    </div>
                                </TouchableOpacity>

                            ))}
                        </a>


                    </View>

                    <View style={styles.titles}>
                        <h3 >
                            Mais locais da região
                        </h3>
                    </View>
                    <ScrollView horizontal={true} >

                        <a style={styles.cardscont} >
                            {cards.map((card) => (

                                <TouchableOpacity style={styles.cards} >
                                    <Image source={card.image} style={styles.imgcard} />
                                    <div className="boxCard">
                                        <h2>{card.titulo}</h2>
                                        <p>{card.descricao}</p>
                                    </div>
                                </TouchableOpacity>

                            ))}
                        </a>

                    </ScrollView>



                </View> {/* fim container */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 80,
    },
    toplop: {
        width: '100%',
        height: 150,
    },

    img: {
        width: '100%',
        height: '100%'
    },
    conteudo: {
        display: 'flex',
        flexDirection: 'column',
        color: '#FFF',
        gap: 10
    },
    titles: {

        fontFamily: 'Arial',
        display: 'flex',
        alignItems: 'center'
    },
    CardList: {
        borderColor: 'pink',
        borderWidth: 4,
        display: 'flex',

    },
    cardscont: {
        borderWidth: 0,
        borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    cards: {
        backgroundColor: 'gray',
        margin: 10,
        width: 300,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imgcard: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});