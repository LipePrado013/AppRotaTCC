import React from 'react';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { useState } from 'react';



export default function Locais({ navigation, route }) {

    const [heart, setHeart] = useState(true);
    const { item } = route.params;

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                marginTop: 30,
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    paddingHorizontal: 26,
                    paddingVertical: 16,
                    marginHorizontal: 16,
                    marginVertical: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>{item.titulo} </Text>


                    <TouchableOpacity onPress={() => setHeart(!heart)}>
                        {heart ? (
                            < AntDesign name="hearto" size={25} color="red" />
                        ) : (
                            < AntDesign name="heart" size={25} color="red" />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{

                    backgroundColor: '#fff',
                    height: 250,
                    borderRadius: 20,
                    paddingVertical: 16,
                    paddingHorizontal: 16,
                    marginHorizontal: 16,
                    marginBottom: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',

                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowRadius: 8,
                    overflow: 'hidden'
                }}>
                    <Image source={item.image} style={{ width: '100%', height: '100%', borderRadius: 10 }} />


                </View>

                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    marginHorizontal: 16,
                    marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowRadius: 8,
                    gap: 10
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 17,
                        textAlign: 'justify'
                    }}>{item.previa} </Text>
                    <Text style={{
                        color: '#ADADAD',
                        fontWeight: '500'
                    }}>{item.data} </Text>


                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <TouchableOpacity style={{
                            margin: 10,
                            borderRadius: 20,
                            overflow: 'hidden',
                            flexDirection: 'row',
                            gap: 20,

                        }} >
                            <Image source={item.image1} style={{
                                width: 100,
                                height: 100
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 10,
                            borderRadius: 20,
                            overflow: 'hidden',
                            flexDirection: 'row',
                            gap: 20,

                        }} >
                            <Image source={item.image2} style={{
                                width: 100,
                                height: 100
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 10,
                            borderRadius: 20,
                            overflow: 'hidden',
                            flexDirection: 'row',
                            gap: 20,

                        }} >
                            <Image source={item.image3} style={{
                                width: 100,
                                height: 100
                            }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 10,
                            borderRadius: 20,
                            overflow: 'hidden',
                            flexDirection: 'row',
                            gap: 20,

                        }} >
                            <Image source={item.image4} style={{
                                width: 100,
                                height: 100
                            }} />
                        </TouchableOpacity>


                    </ScrollView>


                    <Text style={{
                        fontWeight: '700',
                        fontSize: 17,
                        textAlign: 'justify'
                    }}>{item.descricao} </Text>

                </View>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    marginHorizontal: 16,
                    marginBottom: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowRadius: 8,
                    gap: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>

                    <TouchableOpacity style={{

                        paddingLeft: 35,
                        paddingRight: 35,
                        paddingBottom: 15,
                        paddingTop: 15,
                        borderRadius: 10,
                        backgroundColor: '#5386C9'
                    }} onPress={() => navigation.navigate('apiteste')}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: '600'
                        }}>Abrir mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{

                        paddingLeft: 35,
                        paddingRight: 35,
                        paddingBottom: 15,
                        paddingTop: 15,
                        borderRadius: 10,
                        backgroundColor: '#16FA9F'
                    }} onPress={() => { Linking.openURL(item.url) }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: '600'
                        }}>Abrir site</Text>
                    </TouchableOpacity>





                </View>


            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({});
