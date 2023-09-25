import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native"

import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'
import img2 from '../assets/img/Aquario.png'
import Recomendados from "../components/recomenda"





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


export const cards2 = [
    {// deacricao limite de 128 caracteres
        id: 1,
        image: img,
        titulo: 'Museu da pesca',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'Inaugurado em 1998',

    },
    {
        id: 2,
        image: img1,
        titulo: 'Museu do café',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'Inaugurado em 1998',

    },

]
// onPress={() => navigation.navigate('login')} 
export default function Home({ navigation }) {

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titles}>
                    <Text style={styles.TitleDestaque}> Recomendados </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.conteudo}>

                        <FlatList data={cards2} renderItem={({ item }) =>
                            <TouchableOpacity style={{
                                width: '100%',
                                height: 150,
                                marginTop: 10,
                            }} onPress={() => navigation.navigate('locais', { item: item })}>
                                <Image style={styles.img} source={item.image} />
                                <View style={styles.topText}>
                                    <Text style={styles.h2}>{item.titulo}</Text>
                                    <Text style={styles.p2}>{item.descricao}</Text>
                                </View>
                            </TouchableOpacity>

                        } />

                    </View>
                    <View style={styles.titles}>
                        <Text style={styles.TitleDestaque}> Destaques </Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        {cards.map((item) => (
                            <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate('locais', { item: item })}>
                                <Image source={item.image} style={styles.imgcard} />
                                <View style={styles.topText}>
                                    <Text style={styles.h2}>{item.titulo}</Text>
                                    <Text style={styles.p2}>{item.descricao}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}


                    </ScrollView>
                </View>
            </ScrollView >

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
    TitleDestaque: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
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
        gap: 10, shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
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