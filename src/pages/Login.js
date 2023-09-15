import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native"
import img from '../assets/img/logo.png'

export default function Login() {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.img} source={img} />

                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.btnLogar}>
                    <Text style={styles.textBTN}>
                        Logar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btncadastar} >
                    <Text style={styles.textBTN}>
                        Cadastar-se
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        gap: 20,
    },
    img: {
        width: 120,
        height: 200
    },
    imgLogo: {
        width: 100
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 10,
        width: 300,
        height: 40,
        borderWidth: 0,
        fontSize: 20,
    },
    btnLogar: {
        padding: 10,
        width: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16FA9F',
        borderRadius: 10,
        borderWidth: 0,
        color: '#fff'
    },
    btncadastar: {
        padding: 10,
        width: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#096641',
        borderRadius: 10,
        borderWidth: 0,
        color: '#fff'
    },
    textBTN: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
