import {StyleSheet} from 'react-native'
import colors from "../../styles/colors";
import commonStyles from '../../styles/commonStyles';
import fontFamily from "../../styles/fontFamily";
import { moderateVerticalScale, scale, textScale, verticalScale } from '../../styles/responsiveSize';


export default StyleSheet.create ({
  container:{
    flex:1
  },
  txt:{
      ...commonStyles.futuraBtHeavyFont30,
      textAlign: 'center',
      marginTop:moderateVerticalScale(20)
  },
    bar: {
      height: verticalScale(300),
      width: scale(300),
      marginHorizontal: moderateVerticalScale(30),
    },
    main: {
      textAlign: 'center',
      fontFamily: fontFamily.regular,
      marginBottom:20,
      marginTop: verticalScale(30),
      fontSize: textScale(20),
      color: colors.btnColor,
      
    },
    content:{
      top: 30, bottom: 30
    },
    content1:{
      top:20,
      bottom:20
    }
   
  });