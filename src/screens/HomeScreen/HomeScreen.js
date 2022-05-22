import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  NativeModules,
} from 'react-native';
import React from 'react';
import styles from './styles';
import * as GlobalStyles from '../../globalStyles/GlobalStyles';
import ScreenTitleBar from '../../components/ScreenTitleBar/ScreenTitleBar';
import HomeTab from '../../components/HomeTab/HomeTab';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={GlobalStyles.Colors.generalWhite}
        translucent={true}
      />
      <ScreenTitleBar />
      <View
        style={styles.userImageContainer}>
        <Image
          source={require('../../assets/images/barcode.jpg')}
          style={styles.userImage}
        />
      </View>
      <View
        style={styles.homeTabContainer}>
        <View
          style={styles.homeTab}>
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Residents'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'users'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Payments'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'cc-visa'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Meetings'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'globe'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
        </View>
        <View
          style={styles.homeTab}>
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Panic'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'bell-slash-o'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Visitors'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'map-marker'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
          <HomeTab
            width={'32%'}
            height={'100%'}
            borderRadius={20}
            borderWidth={0.5}
            borderColor={GlobalStyles.Colors.generalGray1}
            imageborderColor={GlobalStyles.Colors.generalGray1}
            imageborderWidth={0.5}
            baseColor1={GlobalStyles.Colors.generalGray1}
            containerWidth={GlobalStyles.normalize(55)}
            containerHeight={GlobalStyles.normalize(55)}
            containerBorderRadius={55}
            homeTabText={'Block'}
            iconColor={GlobalStyles.Colors.baseColor1}
            iconName={'bank'}
            iconSize={30}
            homeFontWeight={'bold'}
            homeTabTextColor={GlobalStyles.Colors.baseColor1}
            homeTabTextMarginTop={GlobalStyles.normalize(7)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
