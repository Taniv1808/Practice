import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'
commonStyles

export default StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        marginBottom:30
    },
    main:{
        textAlign: 'center',
        ...commonStyles.futuraBtHeavyFont30,
      }

})
