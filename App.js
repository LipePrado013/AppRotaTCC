import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/routes/Tab.Routes';
import DrawerRoutes from './src/routes/Drawer.Routes';
export default function App() {
  return (

    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>

  );
}
