import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import * as GlobalStyles from '../../globalStyles/GlobalStyles';

const InputBox = ({
  width,
  height,
  borderWidth,
  borderColor,
  borderRadius,
  backgroundColor,
  paddingHorizontal,
  iconName,
  size,
  color,
  iconStyle,
  seperatorStyle,
  placeholder,
  MT,
  MB,
  secondIconColor,
  secondIconSize,
  secondIconName,
  textInputWidth
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
        height: height,
        marginBottom:MB,
        marginTop:MT,
        paddingHorizontal: paddingHorizontal,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}
      disabled={'disabled'}
      >
      <Icon
        name={iconName}
        size={size}
        color={color}
        style={iconStyle}
      />
      <Text
        style={seperatorStyle}>
        |
      </Text>
      <TextInput placeholder={placeholder} style={{width: textInputWidth}}/>
      <Icon
        name={secondIconName}
        size={secondIconSize}
        color={secondIconColor}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
};

export default InputBox;
