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
      ...commonStyles.futuraBtHeavyFont30,
      marginTop: moderateVerticalScale(20),
    },
    search: {
      marginLeft: 30,
      marginTop: moderateVerticalScale(20),
      marginBottom: 10,
    },
    search1:{
        width: 290,
        borderWidth: 0.2,
        borderRadius: 10,
        height: 40,
        marginTop: 2,
      },
      locate:{
        margin:30,
        borderWidth: 0.2,
        width: 220,
        height: 35,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#dcdcdc',
        paddingVertical:6
      },
      activity:{
          position: 'absolute', 
          marginLeft: 230, 
          marginTop: 10
        }
  });
  