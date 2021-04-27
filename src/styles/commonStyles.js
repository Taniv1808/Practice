import {StyleSheet} from 'react-native';
import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';
export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumFont14:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
    opacity:.7

  },
  mediumFont14Normal:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
    opacity:1
  },
  mediumFont16:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
  },
  futuraBtHeavyFont16:{
    fontSize:textScale(16),
    color:colors.black,
    fontFamily:fontFamily.futuraBtHeavy
    
  },
  futuraBtHeavyFont14:{
    fontSize:textScale(14),
    color:colors.black,
    fontFamily:fontFamily.futuraBtHeavy
    
  },
  futuraHeavyBt:{
    fontSize:textScale(16),
    color:colors.black,
    fontFamily:fontFamily.futuraHeavyBt
  },
  futuraBtHeavyFont30:{
    fontSize:textScale(30),
    color:colors.black,
    fontFamily:fontFamily.futuraBtHeavy
    
  },
  
  
});
