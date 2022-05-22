import {StyleSheet, NativeModules, Platform} from 'react-native';
import * as GlobalStyles from '../../globalStyles/GlobalStyles'

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '12%',
        alignItems: 'center',
        marginTop: STATUSBAR_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorinzontal: 30,
        paddingLeft: GlobalStyles.normalize(20),
        paddingRight: GlobalStyles.normalize(20),
      },
      barIcon: {alignSelf: 'center', fontWeight: '100'},
      imageContainer: {
        width: GlobalStyles.normalize(45),
        height: GlobalStyles.normalize(45),
        marginLeft: GlobalStyles.normalize(8),
        marginRight: GlobalStyles.normalize(8),
        borderRadius: 50,
        backgroundColor: 'orange',
      },
      profileImage: {
        width: GlobalStyles.normalize(45),
        height: GlobalStyles.normalize(45),
        borderRadius: 50,
      },
      companyName: {
        color: GlobalStyles.Colors.baseColor1,
        fontSize: GlobalStyles.normalize(20),
        marginBottom: 5,
        fontWeight: 'bold',
      },
      navigationTextContainer:{
          alignItems: 'center',
          marginLeft:10,
          justifyContent:'center'
      },
      leftIconContainer:{
          justifyContent: 'center',
          flexDirection:'row'
      },
      rightContainer:{flexDirection: 'row', alignItem: 'center'},
      iconStyle:{ marginRight: 25 },
      direction:{
        color: GlobalStyles.Colors.generalWhite,
        fontSize: GlobalStyles.normalize(10),
      }

})

export default styles;