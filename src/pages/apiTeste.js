import { useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";


export default function Apiteste() {

    const [locais, setLocais] = useState([]);

    function data() {
        fetch('http://192.168.15.14:80/API-Rota/')
            .then((Response) => Response.json())
            .then(json => setLocais(json))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        data()
    }, []);

    return (
        <>

            {
                locais.map(item => (
                    <View>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={{ uri: item.img_local }} />
                        <Text>{item.nm_local}</Text>
                    </View>
                ))
            }
            <Text>oioioaiosdiadoaisoaido</Text>
        </>
    )
}