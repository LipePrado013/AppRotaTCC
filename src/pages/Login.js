import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native"
import img from '../assets/img/logo.png'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";


export default function Login() {
  // const route = useRoute();
  const navigation = useNavigation()


  // api 
  const [users, setUsers] = useState([]);
  // const [destaques, setDestaques] = useState([]);

  function data() {
    fetch('http://192.168.15.13:80/API-Rota/users') //mudar o ip da maquina para que a API funcione 
      .then((Response) => Response.json())
      .then(json => {
        setUsers(json) //aqui ele vai pegar o indece(0, 2)é quantos eu quero que ele pegue.
      })
      .catch(err => console.error(err))
  }

  // console.log(users)

  useEffect(() => {
    data()
  }, []);
  // api

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')




  // function login() {
  //   if (email === users.map(user => user.cd_email)) {
  //     navigation.navigate('main', { screen: 'home' })
  //   } else {
  //     console.log('login')
  //     // navigation.navigate('main', { screen: 'home' })
  //   }
  // }


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image style={styles.img} source={img} />

        <TextInput style={styles.input}
          onChangeText={value => setEmail(value)}
          placeholder="E-mail" />
        <TextInput style={styles.input}
          onChangeText={value => setSenha(value)}
          secureTextEntry={true} placeholder="Senha" />

        <TouchableOpacity style={styles.btnLogar}
          onPress={() => navigation.navigate('main', { screen: 'home' })}>

          <Text style={styles.textBTN}>
            Logar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncadastar} onPress={() => navigation.navigate('cadastrar')}>
          <Text style={styles.textBTN}>
            Cadastar-se
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncadastar} onPress={''}>
          <Text style={styles.textBTN}>
            teste
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
