import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native';

export default function Locais({ navigation, route }) {

    const { item } = route.params;
    return (
        <>
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
                <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'contain', objectFit: 'cover' }} />


            </View>
            <View style={{
                backgroundColor: '#fff',

                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginHorizontal: 16,

                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 5,
                shadowRadius: 8,
            }}>
                <Text >{item.descricao} </Text>
                <Text >{item.data} </Text>


            </View>
        </>
    );
}

const styles = StyleSheet.create({});
