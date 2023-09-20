import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native";
import img from '../assets/img/museupesca.png'
import img1 from '../assets/img/museu-do-cafe.png'
import img2 from '../assets/img/Aquario.png'
import './Home.css'

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
    {
        id: 3,
        image: img2,
        titulo: 'Awquario',
        data: 'inaugurado em 1998',
        // type: 0
    },
]


export default function Home() {

    return (
        <>
            <ScrollView >
                <View style={styles.titles}>
                    <h2>
                        recomendações
                    </h2> 
                </View>
                    <View style={styles.container}>

                        <View  style={styles.conteudo}>
                            <TouchableOpacity  style={styles.BtnTop}>
                                <Image style={styles.img} source={img1} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.BtnTop}>
                                <Image style={styles.img} source={img} />
                            </TouchableOpacity>
                        </View>
               
                    <View style={styles.titles }>
                            <h3 >
                                Mais locais da região
                            </h3>
                    </View>
                        <ScrollView horizontal={true} >

                                {/* <FlatList style={styles.CardList}
                                    data={cards}
                                    // showsHorizontalScrollIndicator={true}
                                    keyExtractor={(item) => String(item.id)}
                                    renderItem={({ item }) =>
                                <View style={styles.cardscont}>
                                        <View style={styles.cards}>
                                            <Image style={styles.imgcard} source={item.image} />
                                            <Text>{item.titulo}</Text>
                                            <Text >{item.data}</Text>
                                        </View>
                                </View>
                                }
                                /> */}
                                

                            <a style={styles.cardscont} >
                                {cards.map((card) => (

                                    <TouchableOpacity style={styles.cards} >
                                        <Image source={card.image} style={styles.imgcard}/>
                                    </TouchableOpacity>

                                ))}
                            </a>
                        
                        </ScrollView>
                 
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    img: {
        width: '100%',
        height: '100%'
    },
    conteudo: {
       
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
        width: '100%',
        height: 150,
      
    },
    titles: {
        overflow: 'hidden',
    
        fontFamily: 'Arial',
        display: 'flex',
    alignItems:'center'
    },
    CardList: {
        borderColor: 'pink',
        borderWidth: 4,
        display: 'flex',
    
    },
    cardscont: {
        borderWidth:0,
        borderWidth: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

    cards: {
    backgroundColor:'gray',
    margin:10,
    width:300,
    height:200,
    borderRadius:20,
    overflow:'hidden',
    }, 
    imgcard: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});