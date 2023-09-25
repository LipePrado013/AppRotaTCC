import React from 'react';
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native';


export default function Map() {

    return (
        <View style={styles.container}>

            <MapView style={styles.map} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
