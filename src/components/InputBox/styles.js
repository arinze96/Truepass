import {StyleSheet} from 'react-native'
import * as GlobalStyles from '../../globalStyles/GlobalStyles'

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        borderWidth: 1,
        borderColor: GlobalStyles.Colors.generalGray1,
        borderRadius: 10,
        backgroundColor: GlobalStyles.Colors.generalWhite
    }
});

export default styles