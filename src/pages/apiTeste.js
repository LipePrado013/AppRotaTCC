import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";


export default function Apiteste() {
  const [locais, setLocais] = useState([]);

  function data() {
    fetch('http://192.168.15.13:80/API-Rota/') //mudar o ip da maquina para que a API funcione 
      .then((Response) => Response.json())
      .then(json => {
        setLocais(json); //aqui ele vai pegar o indece(0, 2)é quantos eu quero que ele pegue.
        //aq ele vai ta pegado oq ta sobrando do array, sem o 0 e 1 do array. 
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    data()
  }, []);
  return (
    <>
      <View style={{
        paddingTop: 30
      }}>
        <ScrollView >
          {locais.map(local => (

            <Text style={{
              padding: 10,
              width: 60,
              height: 60,
              borderWidth: 1,
              textAlign: 'center',

            }}>{local.id_local}</Text>

          ))
          }
        </ScrollView>
      </View>

    </>
  )
}