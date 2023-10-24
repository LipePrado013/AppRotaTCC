import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native"
import img from '../assets/img/logo.png'
import { useState } from "react";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState()
  const [SobreNome, setSobreNome] = useState()
  const [Cidade, setCidade] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [ConfirmaSenha, setConfirmaSenha] = useState()

  // console.log(
  //     'nome ' + nome,
  //     'sobrenome ' + SobreNome,
  //     'email ' + email,
  //     'senha ' + senha,
  //     'confrmasenha ' + ConfirmaSenha
  // )

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={img} />

        <TextInput style={styles.input}
          onChangeText={value => setNome(value)}
          placeholder="Nome" />
        <TextInput style={styles.input}
          onChangeText={value => setSobreNome(value)}
          placeholder="Sobrenome" />
        <TextInput style={styles.input}
          onChangeText={value => setCidade(value)}
          placeholder="Cidade" />
        <TextInput style={styles.input}
          onChangeText={value => setEmail(value)}
          placeholder="E-mail" />
        <TextInput style={styles.input}
          onChangeText={value => setSenha(value)}
          secureTextEntry={true} placeholder="Senha" />
        <TextInput style={styles.input}
          onChangeText={value => setConfirmaSenha(value)}
          secureTextEntry={true} placeholder="Confirma senha" />

        <TouchableOpacity style={styles.btnLogar} onPress={() => navigation.navigate('main', { screen: 'home', params: { nome: nome } })}>
          <Text style={styles.textBTN}>
            Cadastar-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{

          padding: 10
        }} onPress={() => navigation.navigate('login')}>
          <Text style={{ color: '#FFF', fontSize: 17 }}>
            Ja tenho conta
          </Text>
        </TouchableOpacity>

      </View >
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
