import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './src/routes/Drawer.Routes';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (

    <NavigationContainer>
      <DrawerRoutes />
      <StatusBar style='light' />
    </NavigationContainer>

  );
}
