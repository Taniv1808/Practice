import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import {StyleSheet} from 'react-native'
import { moderateVerticalScale, textScale, verticalScale } from "../../styles/responsiveSize";
import commonStyles from "../../styles/commonStyles";
export default StyleSheet.create({
    container: {
      backgroundColor: colors.themeClr,
      flex: 1,
    },
    input: {
      textAlign: 'center',
      marginTop: verticalScale(20),
      ...commonStyles.futuraBtHeavyFont30,
    },
    centerText: {
      flex: 1,
      ...commonStyles.futuraBtHeavyFont16,
      padding: 32,
      color: colors.centertxt,
      marginTop:verticalScale(10),
      textAlign:'center'
  
    },
    textBold: {
      fontFamily:fontFamily.regular,
      color: colors.txtColor,
    },
    buttonText: {
      ...commonStyles.mediumFont16,
      color: 'rgb(0,122,255)',
      marginTop:verticalScale(50)
    },
    buttonTouchable: {
      padding: 16
    },
    qr:{
      width:250,
      height:250,
      marginLeft:moderateVerticalScale(30),
      marginTop:verticalScale(10)
    },
    show:{
      textAlign:'center',
      marginTop:20,
      fontSize:20
    },
    main:{
      alignItems: 'center', 
      marginTop: 20
    },
    close:{
      textAlign:'center',
      marginTop:20
    },
    content:{
      width:90,
      height:90
    }
    
  });
  