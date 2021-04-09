import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'

export default StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        marginBottom:30
    },
    main:{
        textAlign: 'center',
        ...commonStyles.futuraBtHeavyFont16,
        fontFamily: fontFamily.regular,
      }

})
