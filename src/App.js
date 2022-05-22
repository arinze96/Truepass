import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigator/Navigatior';
import * as GlobalStyles from './globalStyles/GlobalStyles'

const App = () => {
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide();
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={GlobalStyles.Colors.generalWhite}
        translucent={true}
      />
      {/* <DrawerNavigator/> */}
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;

