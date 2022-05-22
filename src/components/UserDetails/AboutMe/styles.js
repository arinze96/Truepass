import {StyleSheet} from 'react-native';
import * as GlobalStyles from '../../../globalStyles/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
  aboutMeContainer: {
    width: '85%',
    height: '40%',
    borderWidth: 0.2,
    borderColor: GlobalStyles.Colors.generalGray1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userExplainHobbies: {
    fontSize: GlobalStyles.normalize(12),
    textAlign: 'justify',
  },
  aboutMePersonalData:{
    width: '85%',
    height: '47%',
    borderWidth: 0.2,
    borderColor: GlobalStyles.Colors.generalGray1,
    borderRadius: 10,
  },
  personalDataContainer:{
    width: '33.33%',
    height: '100%',
    backgroundColor:  GlobalStyles.Colors.generalWhite,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  personalData:{ fontWeight:'bold' },

  iconStyle:{marginRight: 10},
  userReligionContainer:{
    width: '100%',
    height: '50%',
    flexDirection: 'row',
  },
  userReligionData:{
    width: '50%',
    height: '100%',
    borderTopWidth: 0.2,
    borderTopColor: GlobalStyles.Colors.generalGray1,
    backgroundColor: GlobalStyles.Colors.generalWhite,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }


});

export default styles;
