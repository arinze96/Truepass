import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import * as GlobalStyles from '../../../globalStyles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutMeContainer}>
        <Text style={styles.userExplainHobbies}>
          I love to stay at home and work considering the fact that i am always
          busy but i do indulge in some funky activities once in a while like
          hiking, swimming or just ranting on the internet
        </Text>
      </View>

      <View style={styles.aboutMePersonalData}>
        <View
          style={{
            width: '100%',
            height: '50%',
            flexDirection: 'row',
          }}>
          <View style={styles.personalDataContainer}>
            <Icon
              name={'user-o'}
              size={GlobalStyles.normalize(20)}
              color={GlobalStyles.Colors.baseColor1}
              style={styles.iconStyle}
            />
            <Text style={styles.personalData}>Female</Text>
          </View>
          <View style={styles.personalDataContainer}>
            <Icon
              name={'clock-o'}
              size={GlobalStyles.normalize(20)}
              color={GlobalStyles.Colors.baseColor1}
              style={styles.iconStyle}
            />
            <Text style={styles.personalData}>23</Text>
          </View>

          <View style={styles.personalDataContainer}>
            <Icon
              name={'external-link-square'}
              size={GlobalStyles.normalize(20)}
              color={GlobalStyles.Colors.baseColor1}
              style={styles.iconStyle}
            />
            <Text style={styles.personalData}>159 CM</Text>
          </View>
        </View>
        <View
          style={styles.userReligionContainer}>
          <View
            style={styles.userReligionData}>
            <Icon
              name={'book'}
              size={GlobalStyles.normalize(20)}
              color={GlobalStyles.Colors.baseColor1}
              style={styles.iconStyle}
            />
            <Text style={styles.personalData}>Religion</Text>
          </View>
          <View
            style={styles.userReligionData}>
            <Icon
              name={'clock-o'}
              size={GlobalStyles.normalize(20)}
              color={GlobalStyles.Colors.baseColor1}
              style={styles.iconStyle}
            />
            <Text style={styles.personalData}>Islam</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutMe;
