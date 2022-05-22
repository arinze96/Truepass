import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const HomeTab = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  containerHeight,
  containerBorderRadius,
  containerWidth,
  containerBackgroundColor,
  iconColor,
  iconName,
  iconSize,
  homeTabFontSize,
  homeTabMarginTop,
  homeTabText,
  homeTabTextColor,
  homeFontWeight,
  homeTabTextMarginTop,
  borderWidth,
  borderColor,
  imageborderColor,
  imageborderWidth,
}) => {
  return (
    <View
      style={[
        {
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <View
        style={[
          {
            width: containerWidth,
            height: containerHeight,
            borderRadius: containerBorderRadius,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: imageborderWidth,
            borderColor: imageborderColor,
            backgroundColor: containerBackgroundColor,
            // shadowColor: '#171717',
            // shadowOffset: {width: 0, height: 2},
            // shadowOpacity: 0.25,
            // shadowRadius: 3,
            // elevation:5,
            // shadowColor: '#171717',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 3,
            elevation: 7,
            backgroundColor: 'white'
          },
        ]}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
      <Text
        style={[
          {
            fontSize: homeTabFontSize,
            fontWeight: homeFontWeight,
            marginTop: homeTabMarginTop,
            color: homeTabTextColor,
            marginTop: homeTabTextMarginTop,
          },
        ]}>
        {homeTabText}
      </Text>
    </View>
  );
};

export default HomeTab;
