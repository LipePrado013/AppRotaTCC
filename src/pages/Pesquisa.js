import React from 'react';
import { TextInput } from 'react-native';
import { Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate';


// {/* pre definido apenas para a apresentação excluir dpois */}
import museupesca from '../assets/img/museupesca.png'
import museucafe from '../assets/img/museu-do-cafe.png'
import { useState } from 'react';
const data = [
    {
        id: 2,
        image: museucafe,
        titulo: 'Museu do café',
        previa: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético, com 6 mil m² e mais de 200 portas e janelas, o Museu do Café, inaugurado em 1998, é muito mais do que um local turístico que exalta o principal produto brasileiro de exportação no final do século 19. É uma experiência de variadas sensações, que vão do início do cultivo do grão até a consolidação do café como um dos símbolos nacionais. Exposições permanente e temporárias, obras de arte, mobiliário de época, loja temática e cafeteria que serve os melhores grãos café - e até o mais caro e raro do país - são algumas de suas muitas atrações.',
        data: 'inaugurado em 1998',
        url: 'https://www.google.com.br/maps/place/Museu+do+Caf%C3%A9/@-23.9325915,-46.3305413,18.33z/data=!4m6!3m5!1s0x94ce0483a06d9795:0x1d093fb38106a820!8m2!3d-23.9325166!4d-46.3300954!16s%2Fg%2F1hcnfrjcf?entry=ttu',

    },
    {
        id: 1,
        image: museupesca,
        titulo: 'Museu do da pesca',
        previa: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos. ',
        descricao: 'Instalado em um casarão de 1908, o  Museu de Pesca, é uma das principais atrações turísticas de Santos e integra o patrimônio histórico-cultural de toda a região. De estilo eclético, o prédio, construído no local do antigo Forte Augusto (século XVIII), abriga importante acervo do ambiente aquático. Dentre as atrações, um esqueleto de baleia com 23m de comprimento, lulas gigantes, Sala da Praia, Ala Lúdica, animais taxidermizados e uma grande coleção de areias de praias do Brasil e do mundo.',
        data: 'inaugurado em 1932',
        url: 'https://www.google.com.br/maps/place/Museu+de+Pesca/@-23.9902073,-46.3090641,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce026c9975d8f3:0xb41a39d51a00f50b!8m2!3d-23.9902122!4d-46.3064892!16s%2Fg%2F11b66hhjxk?entry=ttu',
        // type: 1

    },
]
// {/* pre definido apenas para a apresentação excluir dpois */}

export default function Pesquisa({ navigation }) {
    const [pesquisa, setPesquisa] = useState(false)


    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                marginTop: 30,
            }}>

                <View style={{
                    marginHorizontal: 30,
                    paddingTop: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <TextInput placeholder='Pesquisar' style={{
                        borderWidth: 1,
                        padding: 9,
                        fontSize: 17,
                        flex: 1,
                        borderTopLeftRadius: 20, borderBottomLeftRadius: 20
                    }} value='Museu' />
                    {/* BOTÂO  */}
                    {/* pre definido apenas para a apresentação excluir dpois */}



                    <TouchableOpacity style={{
                        padding: 10,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        backgroundColor: '#121212'
                    }} onPress={() => setPesquisa(!pesquisa)}>
                        <Text>
                            <Entypo name="magnifying-glass" size={27} color="#16FA9F" />
                        </Text>
                    </TouchableOpacity>


                    {/* pre definido apenas para a apresentação excluir dpois */}
                    {/* BOTÂO fim */}
                </View>


                {/* resultado da pesquisa  */}
                <View style={{
                    marginStart: 14,
                    marginTop: 20,
                    gap: 10
                }}>
                    {pesquisa ?
                        (
                            data.map(item => (
                                <TouchableOpacity style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 10,
                                    alignItems: 'center',
                                    padding: 5,
                                    backgroundColor: '#000',
                                    borderTopLeftRadius: 100,
                                    borderBottomLeftRadius: 100
                                }} onPress={() => navigation.navigate('locais', { item: item })}>
                                    <Image source={item.image} style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 50
                                    }} />
                                    <View>
                                        <Text style={{
                                            width: 230,
                                            textAlign: 'justify',
                                            color: '#fff'
                                        }}>{item.previa}</Text>
                                        <Text style={{
                                            color: 'gray'
                                        }}>{item.data}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        ) : (<View></View>)}

                </View>
                {/* resultado da pesquisa fim */}

            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({});
