import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native"

import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'
import img2 from '../assets/img/Aquario.png'


const cards2 = [
    {
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'inaugurado em 1998',

    },
    {
        id: 2,
        image: img1,
        titulo: 'museu do café',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'inaugurado em 1998',

    },

]

const cards = [
    {
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'inaugurado em 1998',

    },
    {
        id: 2,
        image: img1,
        titulo: 'museu do café',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'inaugurado em 1998',

    },
    {
        id: 3,
        image: img2,
        titulo: 'Aquario',
        descricao: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record.',
        data: 'inaugurado em 1998',

    },
]
export default function Home() {

    return (
        <>
            <ScrollView >
                <View style={styles.titles}>

                    <Text> Recomendados </Text>

                </View>
                <View style={styles.container}>

                    <View style={styles.conteudo}>

                        <TouchableOpacity style={styles.conteudo} >

                            {cards2.map((card) => (

                                <TouchableOpacity style={styles.toplop} >
                                    <Image style={styles.img} source={card.image} />

                                    <View style={styles.topText}>

                                        <Text style={styles.h2}>{card.titulo}</Text>
                                        <Text style={styles.p2}>{card.descricao}</Text>

                                    </View>
                                </TouchableOpacity>


                            ))}
                        </TouchableOpacity>


                    </View>

                    <View style={styles.titles}>
                        <Text> Destaques </Text>
                    </View>
                    <ScrollView horizontal={true} >

                        <TouchableOpacity style={styles.cardscont} >
                            {cards.map((card) => (

                                <TouchableOpacity style={styles.cards} >
                                    <Image source={card.image} style={styles.imgcard} />
                                    <View style={styles.topText}>
                                        <Text style={styles.h2}>{card.titulo}</Text>
                                        <Text style={styles.p2}>{card.descricao}</Text>
                                    </View>
                                </TouchableOpacity>

                            ))}
                        </TouchableOpacity>

                    </ScrollView>
                </View>
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
    topText: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',

        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: '#000000ae'
    },
    h2: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    p2: {
        color: '#FFF',
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
        display: 'flex',
        alignItems: 'center'
    },
    CardList: {
        display: 'flex',
    },
    cardscont: {
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