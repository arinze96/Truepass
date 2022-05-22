import {StyleSheet} from 'react-native'
import * as GlobalStyles from '../../../globalStyles/GlobalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: GlobalStyles.Colors.generalWhite
    },
    logo:{
        width: GlobalStyles.normalize(130),
        height: GlobalStyles.normalize(130),
        marginTop: 30,
      },
      inputContainer:{alignItems: 'center'},
      inputBox:{
        width: '90%',
        height: 280,
        borderWidth: 0.2,
        paddingHorizontal: 15,
        paddingTop: 20,
        marginTop: 15,
        borderColor: GlobalStyles.Colors.generalGray1,
        borderRadius: 20,
      },
      screenCaption: {
        color: GlobalStyles.Colors.baseColor1,
        fontWeight: 'bold',
        fontSize: GlobalStyles.normalize(15),
      },
      seperatorStyle:{
        marginRight: 20,
        fontSize: GlobalStyles.normalize(25),
        fontWeight: '100',
      },
      buttonSeperatorStyle:{
        color: GlobalStyles.Colors.generalWhite,
        fontWeight: 'bold',
      },
      copyRight:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'baseline',
        color:GlobalStyles.Colors.baseColor1
      },
      copyRightText:{ fontSize: GlobalStyles.normalize(10) }
})

export default styles