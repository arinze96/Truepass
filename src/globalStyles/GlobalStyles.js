import {PixelRatio, Dimensions, Platform} from 'react-native'

const Colors = {
    baseColor1: '#290739',
    baseColor1: '#290739',
    baseColor1RGBA:'rgba(41,7,57,0.5)',
    baseColor2: '#FF0000',
    backgroundColor: '#00000009' ,
    generalWhite: '#ffffff',
    generalWhite1: 'rgba(255,255,255,0.9)',
    generalBlack: '#000000',
    generalGray1 : '#C0C0C0',
}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  
  const normalize = (size) => {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

export {Colors, normalize }