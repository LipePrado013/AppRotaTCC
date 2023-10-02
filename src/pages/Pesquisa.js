import React from 'react';
import { TextInput } from 'react-native';
import { Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate';


// {/* pre definido apenas para a apresentação excluir dpois */}

import museucafe from '../assets/img/museu-do-cafe.png'
const data = [
    {
        id: 2,
        image: museucafe,
        titulo: 'museu do café',
        previa: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético.',
        descricao: 'Um lugar que reúne tradição, arquitetura, história, sabores e aromas. Instalado em um prédio de estilo eclético, com 6 mil m² e mais de 200 portas e janelas, o Museu do Café, inaugurado em 1998, é muito mais do que um local turístico que exalta o principal produto brasileiro de exportação no final do século 19. É uma experiência de variadas sensações, que vão do início do cultivo do grão até a consolidação do café como um dos símbolos nacionais. Exposições permanente e temporárias, obras de arte, mobiliário de época, loja temática e cafeteria que serve os melhores grãos café - e até o mais caro e raro do país - são algumas de suas muitas atrações.',
        data: 'inaugurado em 1998',
        url: 'https://www.google.com.br/maps/place/Museu+do+Caf%C3%A9/@-23.9325915,-46.3305413,18.33z/data=!4m6!3m5!1s0x94ce0483a06d9795:0x1d093fb38106a820!8m2!3d-23.9325166!4d-46.3300954!16s%2Fg%2F1hcnfrjcf?entry=ttu',

    },
]
// {/* pre definido apenas para a apresentação excluir dpois */}

export default function Pesquisa({ navigation, route }) {


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

                    }} value='Museu do café' />

                    {/* pre definido apenas para a apresentação excluir dpois */}

                    {data.map(item =>

                        <TouchableOpacity style={{
                            padding: 10,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            backgroundColor: '#121212'
                        }} onPress={() => navigation.navigate('locais', { item: item })}>
                            <Text>
                                <Entypo name="magnifying-glass" size={27} color="#16FA9F" />
                            </Text>
                        </TouchableOpacity>
                    )}

                    {/* pre definido apenas para a apresentação excluir dpois */}

                </View>

            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({});
