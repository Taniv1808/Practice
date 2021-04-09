import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import {StyleSheet} from 'react-native'
import { textScale } from "../../styles/responsiveSize";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
    txt:{
        ...commonStyles.mediumFont16,
        textAlign:'center'
      }
})