import {StyleSheet, NativeModules, Platform} from 'react-native';
import * as GlobalStyles from '../../globalStyles/GlobalStyles';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.generalWhite,
    // paddingHorizontal:20
  },
  barIcon: {alignSelf: 'center'},
  userImage: {width: '100%', height: '100%'},
  userImageContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
  homeTabContainer: {
    height: '35%',
    width: '100%',
    marginTop: '2%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  homeTab:{
    width: '100%',
    height: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalStyles.normalize(20),
  },
});

export default styles;
