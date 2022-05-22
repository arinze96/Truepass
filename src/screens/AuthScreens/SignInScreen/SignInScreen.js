import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from './styles';
import * as GlobalStyles from '../../../globalStyles/GlobalStyles';
import InputBox from '../../../components/InputBox/InputBox';
import Button from '../../../Button/Button';

const SignInScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../assets/images/logo1.jpg')}
          style={styles.logo}
        />
        <View
          style={styles.inputBox}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{height: '100%'}}>
            <Text
              style={styles.screenCaption}>
              Welcome Back
            </Text>
            <KeyboardAvoidingView>
              <InputBox
                width={'100%'}
                height={'23%'}
                borderWidth={1}
                borderColor={GlobalStyles.Colors.baseColor1}
                borderRadius={6}
                paddingHorizontal={17}
                iconName={'envelope-o'}
                size={GlobalStyles.normalize(20)}
                color={GlobalStyles.Colors.baseColor1}
                iconStyle={{marginRight: 20}}
                seperatorStyle={styles.seperatorStyle}
                MT={20}
                MB={15}
                textInputWidth={'70%'}
                placeholder={'nusaiba.sabui@gmail.com'}
                disabled={true}
              />

              <InputBox
                width={'100%'}
                height={'23%'}
                borderWidth={1}
                borderColor={GlobalStyles.Colors.baseColor1}
                borderRadius={6}
                MB={15}
                paddingHorizontal={20}
                iconName={'lock'}
                size={GlobalStyles.normalize(21)}
                color={GlobalStyles.Colors.baseColor1}
                iconStyle={{marginRight: GlobalStyles.normalize(21)}}
                seperatorStyle={styles.seperatorStyle}
                placeholder={'Enter Password'}
                secondIconColor={GlobalStyles.Colors.baseColor1}
                secondIconSize={GlobalStyles.normalize(20)}
                secondIconName={'eye'}
                textInputWidth={'70%'}
              />
              <Button
                backgroundColor={GlobalStyles.Colors.baseColor2}
                width={'100%'}
                height={'23%'}
                title={'continue'}
                borderRadius={6}
                screen={'HomeScreen'}
                seperatorStyle={styles.buttonSeperatorStyle}
                
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        </View>
        <View
          style={styles.copyRight}>
            <Text style={styles.copyRightText}>{'\u00A9'} copyright 2022, Allrights Reserved</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
