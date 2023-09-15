import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/Routes/Tab.routes';
import DrawerRoutes from './src/Routes/drawer.routes';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
      {/* <TabRoutes /> */}
    </NavigationContainer>
  );
}

''