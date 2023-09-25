import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Locais({ navigation, route }) {

    const { card } = route.params

    console.log(card)
    return (
        <View style={styles.container}>
            <Text>locais</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
