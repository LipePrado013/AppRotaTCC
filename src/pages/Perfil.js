import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, View, TouchableOpacity, Image, FlatList } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import perfil from '../assets/img/perfil.png'
import aquario from '../assets/img/Aquario.png'
import quebramar from '../assets/img/quebraMar.png'

export default function Perfil({ navigation }) {

    const dataFav = [
        {
            id: 3,
            image: aquario,
            image1: aquario,
            image2: aquario,
            image3: aquario,
            image4: aquario,
            titulo: 'Aquario',
            previa: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record.',
            descricao: 'Há sete décadas encantando gerações, o Aquário de Santos é o mais antigo do Brasil e desde 1995 consta do Guinness World Record. Espaço privilegiado de lazer e conhecimento, o parque é pioneiro em projetos de preservação do mar e de seus habitantes - foi a  primeira instituição brasileira a realizar resgate e recuperação dos animais marinhos.O Aquário ocupa uma área de 3.000 m², 2.214 dos quais abertos aos visitantes.',
            data: 'inaugurado em 1998',
            url: 'https://www.google.com.br/maps/place/Aqu%C3%A1rio+Municipal+de+Santos/@-23.9862442,-46.3098878,17z/data=!4m10!1m2!2m1!1saquario!3m6!1s0x94ce024548f647a9:0x31768f2da5ccf9f0!8m2!3d-23.9862442!4d-46.3083714!15sCgdhcXVhcmlvWgkiB2FxdWFyaW-SAQhhcXVhcml1bZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGIyVklWbHBCRUFF4AEA!16s%2Fg%2F11r_phgnz?entry=ttu',
            lat: '1212212',
            lon: '3123113',
        },
        {
            id: 4,
            image: quebramar,
            image1: quebramar,
            image2: quebramar,
            image3: quebramar,
            image4: quebramar,
            titulo: 'Quebra Mar',
            previa: 'Com 42.766 m², o Parque Roberto Mário Santini ocupa a plataforma do emissário submarino e avança 400m mar adentro.',
            descricao: 'No parque, estão instalados Espaço Criança, pista profissional de skate com 1.100 m², ciclovia, mesas ao ar livre para jogos, gibiteca, arquibancada com capacidade para 600 pessoas junto ao quebra-mar, torre de observação para jurados em competições de surf, e áreas de convivência e de contemplação.',
            data: 'inaugurado em 2009',
            url: 'https://www.google.com.br/maps/place/Quebra+Mar/@-23.9699289,-46.3501784,17z/data=!4m6!3m5!1s0x94ce03fd03d98457:0x59e79b4431a852b!8m2!3d-23.9699289!4d-46.3501784!16s%2Fg%2F11s90r94hd?entry=ttu',
            lat: '1212212',
            lon: '3123113',
        },
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{

        }}>
            {/* header */}
            <View style={{
                paddingTop: 30,
                backgroundColor: '#121212',
                padding: 10,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20
            }}>
                <View style={{

                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity style={{

                        padding: 5,
                        width: 40,
                    }} onPress={() => navigation.navigate('home')}>
                        {/* <AntDesign name="caretleft" size={30} color="#16FA9F" /> */}
                        <AntDesign name="leftcircle" size={30} color="#16FA9F" />
                    </TouchableOpacity>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                        }}>Olá, Calebe</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Ionicons name="exit-outline" size={30} color="#16FA9F" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        gap: 5
                    }}>
                    <Image source={perfil} style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 500,
                        width: 150,
                        height: 150,
                    }} />

                    <View style={{
                        gap: 5,
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: '#6E6E6E' }}>
                            Nome: Calebe Ricardo da Cunha
                        </Text>
                        <Text style={{ color: '#6E6E6E' }}>
                            cidade: São Paulo
                        </Text>
                        <Text style={{ color: '#6E6E6E' }}>
                            E-mail: CalebeDacunha@gmail.com
                        </Text>
                    </View>
                </View>


            </View>
            {/* header fim */}
            <View style={{
                paddingStart: 14,
                paddingEnd: 14
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    borderBottomWidth: 3
                }}>
                    Favoritos
                </Text>

                <View style={{
                    padding: 10
                }}>
                    <FlatList
                        data={dataFav}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{
                                backgroundColor: '#FFF',
                                borderRadius: 16,
                                marginVertical: 16,
                                alignItems: 'center',
                                padding: 10,
                                overflow: 'hidden',
                                width: 150,
                                height: 160
                            }} onPress={() => navigation.navigate('locais', { item: item })}>


                                <Image style={{ width: 130, height: 100, resizeMode: 'cover', borderRadius: 16, }} source={item.image} />

                                <Text style={{
                                    margin: 10,
                                    fontWeight: 700,
                                    fontSize: 20
                                }}>{item.titulo}</Text>
                            </TouchableOpacity>
                        )} numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: 'space-between'
                        }} />

                </View>

            </View>

            <StatusBar style={'light'} />
        </ScrollView >
    )
} 