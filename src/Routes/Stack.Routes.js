import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Local from '../pages/Local';
import TabRoutes from './Tab.Routes';
import MapLocal from '../pages/MapLocal';
import Perfil from '../pages/Perfil';
import Apiteste from '../pages/apiTeste';
import MapGeral from '../pages/MapGeral';

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='login'
          options={{ headerShown: false }}
          component={Login}
        />

        <Stack.Screen
          name='main'
          options={{
            headerShown: false,
          }}
          component={TabRoutes}
        />
        <Stack.Screen
          name='perfil'
          options={{
            headerShown: false,
          }}
          component={Perfil}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='locais'
          component={Local}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='mapaLocal'
          component={MapLocal}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='mapaGeral'
          component={MapGeral}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='cadastrar'
          component={Cadastro}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='apiteste'
          component={Apiteste}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}