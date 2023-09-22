import { createStackNavigator } from '@react-navigation/stack';
import Local from '../pages/pagesLocal'
const Stack = createStackNavigator();

export default function StackRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="local" component={Local} />
        </Stack.Navigator>
    );
}