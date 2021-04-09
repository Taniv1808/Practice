import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily'

export default StyleSheet.create({
    container: {
      backgroundColor: colors.themeClr,
      flex: 1,
    },
    input: {
      marginTop: 30,
      textAlign: 'center',
      ...commonStyles.mediumFont16
    },
    btn: {
      backgroundColor: colors.btnColor,
      borderWidth: 0.2,
      marginTop: 20,
      width: 120,
      height: 30,
      marginLeft: 130,
      borderRadius: 25,
    },
    txtInput: {
      flexDirection: 'row',
      marginTop: 40,
      marginLeft: 20,
      justifyContent: 'space-between',
    },
    input3: {
      borderWidth: 0.2,
      width: 50,
      borderRadius: 20,
      marginRight: 14,
      textAlign: 'center',
    },
    input2: {
      lineHeight: 20,
      textAlign: 'center',
      marginTop: 20,
    },
  });
  