import React from 'react';
import { Provider } from 'react-redux';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './navigation/DrawerNavigation';
import { store } from './components/store';

const Drawer = createDrawerNavigator();

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

export default function App() {
    return (
        <Provider store={store}>
          <DrawerNavigation />
        </Provider>
    );
}
