import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


// onPress={() => navigation.navigate('login')} 
export default function Home() {
  const navigation = useNavigation()

  const [recomendados, setRecomendado] = useState([]);
  const [destaques, setDestaques] = useState([]);
  const [maisLocais, setMaisLocais] = useState([])

  function data() {
    fetch('http://192.168.15.13:80/API-Rota/') //mudar o ip da maquina para que a API funcione 
      .then((Response) => Response.json())
      .then(json => {
        setMaisLocais(json);
        setDestaques(json); //aq ele vai ta pegado oq ta sobrando do array, sem o 0 e 1 do array. 
        setRecomendado(json.splice(3, 2)); //aqui ele vai pegar o indece(0, 2)é quantos eu quero que ele pegue.
      })
      .catch(err => console.error(err))
  }


  useEffect(() => {
    data()
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} style={{
        marginTop: 30,
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingStart: 10,
          paddingEnd: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}> Recomendados </Text>
          <TouchableOpacity style={{
            padding: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
          }}
            onPress={() => navigation.navigate('perfil')}
          >
            {/* <Text style={{
            }}>Olá, </Text> */}
            <FontAwesome5 name="user-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>{/*container */}
          <View style={styles.conteudo}>
            {
              recomendados.map((local) => (
                <TouchableOpacity key={local.id_local} style={{
                  width: '100%',
                  height: 150,
                  marginTop: 10,
                }} onPress={() => navigation.navigate('locais', { local })}>
                  <Image style={{
                    width: '100%',
                    height: '100%'
                  }} source={{ uri: local.img_local }} />
                  <View style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: '100%',
                    padding: 10,
                    backgroundColor: '#000000ae'
                  }}>
                    <Text style={styles.h2}>{local.nm_local}</Text>
                    <Text style={styles.p2}>{local.tx_previa}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
          <View >
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              padding: 10,
            }}> Destaques </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {destaques.map((local) => (
              <TouchableOpacity key={local.id_local} style={{
                backgroundColor: 'gray',
                margin: 10,
                width: 300,
                height: 200,
                borderRadius: 20,
                overflow: 'hidden',
              }} onPress={() => navigation.navigate('locais', { local })}>
                <Image source={{ uri: local.img_local }} style={styles.imgcard} />
                <View style={styles.topText}>
                  <Text style={styles.h2}>{local.nm_local}</Text>
                  <Text style={styles.p2}>{local.tx_previa}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              padding: 10,
            }}> Mais lugares </Text>
          </View>
          <View style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            {maisLocais.map(local =>
              <TouchableOpacity key={local.id_local} style={{
                backgroundColor: '#FFF',
                borderRadius: 16,
                marginVertical: 16,
                alignItems: 'center',
                padding: 10,
                overflow: 'hidden',
                width: 170,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10, },
                shadowOpacity: 5,
                shadowRadius: 8,
              }} onPress={() => navigation.navigate('locais', { local })}>
                <Image style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 16, }} source={{ uri: local.img_local }} />
                <Text style={{
                  margin: 10,
                  fontWeight: 700,
                }}>{local.nm_local}</Text>
                <Text style={{ width: 150, textAlign: 'justify', }}>{local.tx_previa}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>{/*container fim*/}
      </ScrollView >
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
  toplop: {
    width: '100%',
    height: 150,
  },
  topText: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',

    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#000000ae'
  },
  h2: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  p2: {
    color: '#FFF',
  },
  img: {

  },
  conteudo: {
    display: 'flex',
    flexDirection: 'column',
    color: '#FFF',
    gap: 10, shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  CardList: {
    display: 'flex',
  },
  cardscont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  cards: {

  },
  imgcard: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});