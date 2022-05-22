import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import OnboardingScreen from '../screens/AuthScreens/OnboardingScreen/OnboardingScreen'
import UserDetailScreen from '../screens/UserDetailScreen/UserDetailScreen';
import SignInScreen from '../screens/AuthScreens/SignInScreen/SignInScreen'

const Auth = createNativeStackNavigator();

const AuthNavigatior = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name='OnboardingScreen' component={OnboardingScreen}/>
      <Auth.Screen name='SignInScreen' component={SignInScreen}/>
      <Auth.Screen name='HomeScreen' component={HomeScreen}/>
      <Auth.Screen name='UserDetailScreen' component={UserDetailScreen}/>
    </Auth.Navigator>
  )
}


const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
      <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name='AuthNavigatior' component={AuthNavigatior}/>
        </RootStack.Navigator>
    );
}

export default RootNavigator