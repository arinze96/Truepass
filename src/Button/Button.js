import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Button = ({
  width,
  height,
  borderWidth,
  borderColor,
  borderRadius,
  backgroundColor,
  paddingHorizontal,
  seperatorStyle,
  MT,
  MB,
  title,
  screen
}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
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
      onPress={() => {navigation.navigate(screen)}}
      >
      <Text
        style={seperatorStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
