import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native"

import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'
import img2 from '../assets/img/Aquario.png'

export const cards2 = [
    {// deacricao limite de 128 caracteres
        id: 1,
        image: img,
        titulo: 'Museu da pesca',
        previa: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        data: 'Inaugurado em 1932',
        hora: 'Fechado temporariamente para reforma',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos e integra o patrimônio histórico-cultural de toda a região. De estilo eclético, o prédio, construído no local do antigo Forte Augusto (século XVIII), abriga importante acervo do ambiente aquático. Dentre as atrações, um esqueleto de baleia com 23m de comprimento, lulas gigantes, Sala da Praia, Ala Lúdica, animais taxidermizados e uma grande coleção de areias de praias do Brasil e do mundo.',
        url: 'https://www.google.com.br/maps/place/Museu+de+Pesca/@-23.9902073,-46.3090641,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce026c9975d8f3:0xb41a39d51a00f50b!8m2!3d-23.9902122!4d-46.3064892!16s%2Fg%2F11b66hhjxk?entry=ttu',

    },
    {
        id: 2,
        image: img1,
        titulo: 'Museu do café',
        previa: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        data: 'Inaugurado em 1998',
        hora: 'Terça a sábado: 9h às 18h - Domingo: 10h às 18h - A bilheteria fecha às 17h',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético, com 6 mil m² e mais de 200 portas e janelas, o Museu do Café, inaugurado em 1998, é muito mais do que um local turístico que exalta o principal produto brasileiro de exportação no final do século 19. É uma experiência de variadas sensações, que vão do início do cultivo do grão até a consolidação do café como um dos símbolos nacionais. Exposições permanente e temporárias, obras de arte, mobiliário de época, loja temática e cafeteria que serve os melhores grãos café - e até o mais caro e raro do país - são algumas de suas muitas atrações.',
        url: 'https://www.google.com.br/maps/place/Museu+do+Caf%C3%A9/@-23.9325915,-46.3305413,18.33z/data=!4m6!3m5!1s0x94ce0483a06d9795:0x1d093fb38106a820!8m2!3d-23.9325166!4d-46.3300954!16s%2Fg%2F1hcnfrjcf?entry=ttu',

    },

]

const cards = [
    {
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        previa: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos.',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos e integra o patrimônio histórico-cultural de toda a região. De estilo eclético, o prédio, construído no local do antigo Forte Augusto (século XVIII), abriga importante acervo do ambiente aquático. Dentre as atrações, um esqueleto de baleia com 23m de comprimento, lulas gigantes, Sala da Praia, Ala Lúdica, animais taxidermizados e uma grande coleção de areias de praias do Brasil e do mundo.',
        data: 'inaugurado em 1932',
        url: 'https://www.google.com.br/maps/place/Museu+de+Pesca/@-23.9902073,-46.3090641,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce026c9975d8f3:0xb41a39d51a00f50b!8m2!3d-23.9902122!4d-46.3064892!16s%2Fg%2F11b66hhjxk?entry=ttu',

    },
    {
        id: 2,
        image: img1,
        titulo: 'museu do café',
        previa: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético, com 6 mil m² e mais de 200 portas e janelas, o Museu do Café, inaugurado em 1998, é muito mais do que um local turístico que exalta o principal produto brasileiro de exportação no final do século 19. É uma experiência de variadas sensações, que vão do início do cultivo do grão até a consolidação do café como um dos símbolos nacionais. Exposições permanente e temporárias, obras de arte, mobiliário de época, loja temática e cafeteria que serve os melhores grãos café - e até o mais caro e raro do país - são algumas de suas muitas atrações.',
        data: 'inaugurado em 1998',
        url: 'https://www.google.com.br/maps/place/Museu+do+Caf%C3%A9/@-23.9325915,-46.3305413,18.33z/data=!4m6!3m5!1s0x94ce0483a06d9795:0x1d093fb38106a820!8m2!3d-23.9325166!4d-46.3300954!16s%2Fg%2F1hcnfrjcf?entry=ttu',

    },
    {
        id: 3,
        image: img2,
        titulo: 'Aquario',
        previa: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record.',
        descricao: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record. Espaço privilegiado de lazer e conhecimento, o parque é pioneiro em projetos de preservação do mar e de seus habitantes - foi a  primeira instituição brasileira a realizar resgate e recuperação dos animais marinhos.O Aquário ocupa uma área de 3.000 m², 2.214 dos quais abertos aos visitantes.',
        data: 'inaugurado em 1998',
        url: 'https://www.google.com.br/maps/place/Aqu%C3%A1rio+Municipal+de+Santos/@-23.9862442,-46.3098878,17z/data=!4m10!1m2!2m1!1saquario!3m6!1s0x94ce024548f647a9:0x31768f2da5ccf9f0!8m2!3d-23.9862442!4d-46.3083714!15sCgdhcXVhcmlvWgkiB2FxdWFyaW-SAQhhcXVhcml1bZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGIyVklWbHBCRUFF4AEA!16s%2Fg%2F11r_phgnz?entry=ttu',
    },
    {
        id: 4,
        image: img2,
        titulo: 'Quabre Mar',
        previa: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record.',
        descricao: 'Com 42.766 m², o Parque Roberto Mário Santini ocupa a plataforma do emissário submarino e avança 400m mar adentro. É um espaço privilegiado de observação do mar e da orla, local perfeito para apreciar o pôr do sol.',
        data: 'inaugurado em 1998',
        url: 'https://www.google.com.br/maps/place/Aqu%C3%A1rio+Municipal+de+Santos/@-23.9862442,-46.3098878,17z/data=!4m10!1m2!2m1!1saquario!3m6!1s0x94ce024548f647a9:0x31768f2da5ccf9f0!8m2!3d-23.9862442!4d-46.3083714!15sCgdhcXVhcmlvWgkiB2FxdWFyaW-SAQhhcXVhcml1bZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGIyVklWbHBCRUFF4AEA!16s%2Fg%2F11r_phgnz?entry=ttu',
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
                                    <Text style={styles.p2}>{item.previa}</Text>
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
                                    <Text style={styles.p2}>{item.previa}</Text>
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