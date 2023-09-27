import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Local from '../pages/Local';
import TabRoutes from './Tab.Routes';

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
                    name='home'
                    component={TabRoutes}
                />

                <Stack.Screen
                    name='locais'
                    component={Local}
                />

                <Stack.Screen
                    name='cadastrar'
                    component={Cadastro}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}