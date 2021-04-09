import {StyleSheet} from 'react-native'
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateVerticalScale, scale, textScale, verticalScale } from '../../styles/responsiveSize';


export default StyleSheet.create ({
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
   
  });