import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <DrawerContent {...props} />} 
        screenOptions={{
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#fff',
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;