import {StyleSheet} from 'react-native'
import * as GlobalStyles from '../../../globalStyles/GlobalStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
         justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.Colors.generalWhite
    },
    brix: {width: 100, height: 30, backgrounfdColor: 'orange'}
})

export default styles