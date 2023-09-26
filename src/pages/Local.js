import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, } from 'react-native';

const maps = 'https://www.google.com.br/maps/place/Museu+do+Caf%C3%A9/@-23.9325915,-46.3305413,18.33z/data=!4m6!3m5!1s0x94ce0483a06d9795:0x1d093fb38106a820!8m2!3d-23.9325166!4d-46.3300954!16s%2Fg%2F1hcnfrjcf?entry=ttu'

export default function Locais({ navigation, route }) {

    const { item } = route.params;

    return (
        <><ScrollView>
            <View style={{

                backgroundColor: '#fff',

                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginHorizontal: 16,
                marginVertical: 16,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 5,
                shadowRadius: 8,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700'
                }}>{item.titulo}</Text>


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
                }} onPress={() => navigation.navigate('mapa')}>
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


        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});
