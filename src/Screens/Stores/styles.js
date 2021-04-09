import {StyleSheet} from 'react-native'
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateVerticalScale } from '../../styles/responsiveSize';


export default StyleSheet.create({
    container: {
      backgroundColor: colors.themeClr,
      flex: 1,
    },
    input: {
      textAlign: 'center',
      ...commonStyles.futuraBtHeavyFont16,
      marginTop: moderateVerticalScale(20),
    },
    search: {
      marginLeft: 30,
      marginTop: moderateVerticalScale(20),
      marginBottom: 10,
    },
  });
  