import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native";
import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'

const cards = [
    {
        id: 1,
        image: img,
        titulo: 'museu do da pesca',
        data: 'inaugurado em 1998',
        // type: 0
    },
    {
        id: 2,
        image: img1,
        titulo: 'museu do café',
        data: 'inaugurado em 1998',
        // type: 0
    },
]


export default function Home() {

    return (
        <>
            <ScrollView >
                <View style={styles.container}>

                    <View style={styles.contedo}>
                        <TouchableOpacity style={styles.BtnTop}>
                            <Image style={styles.img} source={img1} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnTop}>
                            <Image style={styles.img} source={img} />
                        </TouchableOpacity>
                    </View>


                    <ScrollView horizontal={true} style={styles.containerCard}>
                        <View style={styles.cardscont}>
                            <FlatList style={styles.CardList}
                                data={cards}
                                // showsHorizontalScrollIndicator={true}
                                keyExtractor={(item) => String(item.id)}
                                renderItem={({ item }) =>
                                    <View style={styles.cards}>
                                        <Image style={styles.imgcard} source={item.image} />
                                        <Text>{item.titulo}</Text>
                                        <Text >{item.data}</Text>
                                    </View>
                                }
                            />
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingBottom: 14,
        borderWidth: 1,
        marginBottom: 80
    },
    img: {
        width: '100%',
        height: '100%'
    },
    contedo: {
        paddingStart: 14,
        paddingEnd: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingTop: 14,
        paddingBottom: 14,
    },
    BtnTop: {
        display: 'flex',
        alignItems: 'flex-end',
        objectFit: 'cover',
        overflow: 'hidden',
        borderWidth: 1,
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#000000aa',
    },
    containerCard: {
        borderWidth: 1,
        borderColor: 'red',
        display: 'flex',
    },
    CardList: {
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    cardscont: {
        borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    cards: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        width: 200,
        height: 250,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imgcard: {
        width: '100%',
        height: 100,
        objectFit: 'cover',
    },
});