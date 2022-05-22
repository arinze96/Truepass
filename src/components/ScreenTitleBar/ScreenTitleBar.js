import {
  View,
  Text,
  Image,
  Platform,
  NativeModules,
  StatusBar,
  TouchableOpacity
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
      <View style={{flexDirection: 'row', alignItem: 'center'}}>
        <Icon
          name={'bars'}
          size={GlobalStyles.normalize(20)}
          color={GlobalStyles.Colors.baseColor1}
          style={styles.barIcon}
        />
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {navigation.navigate('UserDetailScreen')}}
          >
          <Image
            source={require('../../assets/images/girl.jpeg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={styles.companyName}
            onPress={() => {navigation.navigate('UserDetailScreen')}}
            >
            Truepass
          </Text>
          <Text
            style={styles.timeGreetings}>
            Good Afternoon
          </Text>
        </View>
      </View>
      <Icon
        name={'bell-o'}
        size={GlobalStyles.normalize(20)}
        color={GlobalStyles.Colors.baseColor1}
      />
    </View>
  );
};

export default ScreenTitleBar;
