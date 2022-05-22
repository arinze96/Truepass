import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import DrawerScreen from './DrawerScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import RootNavigator from '../../navigator/Navigatior';

// drawerContent={props => <DrawerScreen />}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
        <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


