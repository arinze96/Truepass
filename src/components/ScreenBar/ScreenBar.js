import {
    View,
    Text,
    Image,
    Platform,
    NativeModules,
    StatusBar,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import * as GlobalStyles from '../../globalStyles/GlobalStyles';
  import styles from './styles';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  
  const {StatusBarManager} = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;
  
  const ScreenTitleBar = ({}) => {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Icon
            name={'chevron-left'}
            size={GlobalStyles.normalize(20)}
            color={GlobalStyles.Colors.generalWhite}
            style={styles.barIcon}
            onPress={() => {navigation.goBack()}}
          />
          <View style={styles.navigationTextContainer}>
            <Text
              style={styles.direction}>
              Back
            </Text>
          </View>
        </View>
        <View style={styles.leftIconContainer}>
        <Icon
          name={'comment-o'}
          size={GlobalStyles.normalize(20)}
          color={GlobalStyles.Colors.generalWhite}
          style={styles.iconStyle}
        />
        <Icon
          name={'ellipsis-v'}
          size={GlobalStyles.normalize(20)}
          color={GlobalStyles.Colors.generalWhite}
        />
        </View>
      </View>
    );
  };
  
  export default ScreenTitleBar;
  