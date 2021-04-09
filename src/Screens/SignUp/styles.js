import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import {StyleSheet} from 'react-native'
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        flex:1
    },
    input:{
        marginTop:30,
        textAlign:'center',
        ...commonStyles.mediumFont16
    },
    input2:{
        marginLeft:60
    },
    input3:{
        marginTop:10
    },
    placeText:{
        borderWidth:0.2,
        width:250,
        marginTop:10,
        height:40
    },
    btn:{
        backgroundColor:colors.btnColor,
        borderWidth:0.2,
        marginTop:20,
        width:120,
        height:30,
        marginLeft:130,
        borderRadius:25
    },
    bottom:{
        flexDirection:'row',
        marginTop:40,
        alignItems:'center',
        justifyContent:'center'
    }
})