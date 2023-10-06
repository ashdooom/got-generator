import React from 'react';
import HomeScreen from '../Pages/HomeScreen';
import FavoritesScreen from '../Pages/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

const MyTheme = {
    dark: false,
    colors: {
        primary: '#000',
        background: '#000',
        card: '#000',
        text: '#fff',
        border: '#ff1100',
        notification: '#000',
        active: '#fff',
    },
};


const DrawerArr = [
    { route: 'Home', label: 'Home', type: icon, activeIcon: {faHouse} },
    { route: 'Favorites', label: 'Favorites', type: icon, activeIcon: {faHeart} },

];

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (

        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator
                initialRouteName='home'
                
            >
                <Drawer.Screen name='Home'
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ focused, size }) => (
                            <FontAwesomeIcon icon={faHouse} size={30} style={{color: "#b90909",}} />
                        )
                    }}
                />
                <Drawer.Screen name='Favorites' 
                component={FavoritesScreen} 
                options={{
                    title: 'Favorites',
                    drawerIcon: ({ focused, size }) => (
                        <FontAwesomeIcon icon={faHeart} size={30} style={{color: "#b90909",}} />
                    )
                }}
                />
            </Drawer.Navigator>
        </NavigationContainer>

    )
};



export default DrawerNavigation;