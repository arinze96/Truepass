import {StyleSheet, NativeModules, Platform} from 'react-native'
import * as GlobalStyles from '../../globalStyles/GlobalStyles';


const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: GlobalStyles.Colors.generalWhite,
        // paddingHorizontal:20
    },
    pageSafeArea:{ height: '100%', justifyContent: 'space-between' },
    userDetailContainer:{
        width: '100%',
        height: '50%',
      },
      userProfilePhoto: {
        width: '100%',
        height: '100%',
      },
      nameSection:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        backgroundColor: GlobalStyles.Colors.baseColor1RGBA,
      },
      userName:{
        color: GlobalStyles.Colors.generalWhite,
        fontSize: 40,
        fontWeight: 'bold',
      },
      userContactSection:{
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: GlobalStyles.normalize(40),
      },
      contactContainer:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      userContactIcon:{marginRight: 5},
      userProfession:{
        color: GlobalStyles.Colors.generalWhite,
        zIndex: 100,
      },
      demacator:{
        color: GlobalStyles.Colors.generalWhite,
        fontSize: 30,
        fontWeight: '100',
      },
      tabView: {width: '100%', height: '50%'}
})

export default styles